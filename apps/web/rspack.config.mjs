import path from 'node:path';
import {fileURLToPath} from 'node:url';
import { rspack } from '@rspack/core';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshPlugin from '@rspack/plugin-react-refresh';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('@rspack/core').Configuration} */
export default () => {
  return {
    entry: './src/index.ts',
    context: __dirname,
    output: {
      // set uniqueName explicitly to make react-refresh works
      uniqueName: 'app',
      publicPath: '/',
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
      new HtmlWebpackPlugin(),
      new rspack.container.ModuleFederationPlugin({
        // List of remotes with URLs
        remotes: {
          'auth': 'auth@http://localhost:8083/auth.js',
          'booking': 'booking@http://localhost:8082/booking.js',
        },

        // list of shared modules with optional options
        shared: {
          // specifying a module request as shared module
          // will provide all used modules matching this name (version from package.json)
          // and consume shared modules in the version specified in dependencies from package.json
          // (or in dev/peer/optionalDependencies)
          // So it use the highest available version of this package matching the version requirement
          // from package.json, while providing it's own version to others.
          react: {
            singleton: true, // make sure only a single react module is used
          },
        },

        // list of runtime plugin modules (feature of MF1.5)
      //   runtimePlugins: ['./src/runtimePlugins/logger.js'],
      }),
      !isProduction && new ReactRefreshPlugin(),
    ],
    devServer: {
      port: 8080,
      historyApiFallback: true,
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".graphql", ".css"],
    },
    experiments: {
      css: true,
    },
  };
};