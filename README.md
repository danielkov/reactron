# Reactron

Reactron is a minimal React + Electron app boilerplate with absolutely minimal dependencies. To substitute for Webpack or Gulp, it uses `browserify` into `babelify` with the presets: `babel-preset-es2015` and `babel-preset-react`. To learn more about these, check out their respective repositories.

## Install

`git clone` it into your desired directory, change the configurations in `package.json` and finally start adding your own dependencies and expand on the code-base. You can change the directory structure if you'd like, but make sure you wire up the `import`s as well. If you move or rename the main entry file, make sure your change is reflected in the `package.json` file, under the `build` script.

## Build

To build the app, run `npm run build`. To check out what your app looks like, use `electron .`.

## Issues

If you run into issues while compiling, make sure you have executed `npm i` before you started compiling and also make sure you have `browserify` installed on you computer as a global module. To do this you should do `npm i -g browserify`.
