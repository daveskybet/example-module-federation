import path from 'node:path';
import {fileURLToPath} from 'node:url';
import { rspack } from '@rspack/core';
import ReactRefreshPlugin from '@rspack/plugin-react-refresh';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('@rspack/core').Configuration} */
export default () => {
  return {
    entry: {},
    context: __dirname,
    output: {
      // set uniqueName explicitly to make react-refresh works
      uniqueName: 'auth',
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          include: path.resolve(__dirname, 'src'),
          use: {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                    refresh: !isProduction,
                  },
                },
              },
            },
          },
        },
      ],
    },
    plugins: [
      new rspack.container.ModuleFederationPlugin({
        name: 'auth',

        exposes: {
          './AccountScreen': './src/screens/AccountScreen',
          './SignInScreen': './src/screens/SignInScreen',
          './AuthProvider': './src/providers/AuthProvider',
        },

        shared: [
          // All (used) requests within lodash are shared.
          'lodash/',
          {
            react: {
              // Do not load our own version.
              // There must be a valid shared module available at runtime.
              // This improves build time as this module doesn't need to be compiled,
              // but it opts-out of possible fallbacks and runtime version upgrade.
              // import: false,
              import: false,
              singleton: true,
            },
          },
        ],
      }),
      !isProduction && new ReactRefreshPlugin(),
    ],
    devServer: {
      port: 8083,
      // add CORS header for HMR chunk (xxx.hot-update.json and xxx.hot-update.js)
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".web.tsx", ".graphql", ".css"],
    },
  };
};