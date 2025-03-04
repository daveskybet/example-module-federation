# example-module-federation
Bring micro-frontend architecture to mobile [React Native](https://reactnative.dev) and web [React](https://react.dev) app with [Re.Pack](https://re-pack.dev) and [Rspack](https://rspack.dev) using [Module Federation](https://module-federation.io).

## Structure

- `host` - the main apps, living in the apps directory, which are super apps. They contains all the micro-frontends and provides a way to navigate between them.
- `booking` - micro-frontend for booking service.
  Booking exposes `UpcomingAppointments` screen and `MainNavigator`. `MainNavigator` is Booking app itself. `UpcomingAppointments` screen is a screen, which is used in the super app in its own navigation.
- `auth` - module that is used by other modules to provide authentication and authorization flow and UI.

## How to use

### Requirements

⚠️ **Important:** This project requires:

- Node.js version 22 or higher
- pnpm as package manager

Please refer to the official [pnpm installation guide](https://pnpm.io/installation) for detailed setup instructions.

After installation, it's recommended to align your pnpm version with the project:

```bash
pnpm self-update
```

### Setup

Install dependencies for all apps:

```
pnpm install
```

#### iOS

In case automatic pods installation doesn't work when running iOS project, you can install manually:

```
pnpm pods
```

### Running the Super App

Start DevServer for Host and Mini apps for web:

```
pnpm start:web
```

Start DevServer for Host and Mini apps for native

```
pnpm start:native
```


Run Super App on iOS or Android (ios | android), in a new tab:

```
pnpm run:host:<platform>
```

### Code Quality Scripts

Run tests for all apps:

```
pnpm test
```

Run linter for all apps:

```
pnpm lint
```

Run type check for all apps:

```
pnpm typecheck
```