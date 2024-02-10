# Angular Poke Trainer

This app recreates a Pokemon Trainer registration using Angular (17.1.3), custom themed Angular Material, TailwindCSS, and consuming the public API [PokéAPI](https://pokeapi.co/).

## Prepare environment

Use of [Node Version Manager](https://github.com/nvm-sh/nvm) is recommended and run `nvm use` in the root of the project to set the Node/NPM version. Some cases may require to run `nvm install` to install the required version.

Now, run `npm install` to install the required dependencies.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

> NOTE: Using ChromeHeadless as the browser for avoiding the need of a browser window.

## Git hooks

This project uses [Husky](https://typicode.github.io/husky) to run some checks before committing changes. The checks are:

- Linting and formatting code on commit.
- Running tests on push.

If these checks fail, the commit/push will be rejected.
