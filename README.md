# GraphApp

This is a simple angular app that fetches commits form a provided repository for a provided year and visualise it in a heat-map calendar. 

You can check the deployed version at https://denspiro.github.io/graph-app/

# Working with project locally

All changes should be done in a `gh-pages` branch and then merged into master.

After the changes you should build the project locally and commit everything to keep deployed version functional and up to date.

TODO: Setup proper pipeline for automatic builds.

## NPM Install

Install all npm dependencies `yarn`

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `yarn build --output-path docs --base-href /graph-app/` to build the project. The build artifacts will be stored in the `docs/` directory.

