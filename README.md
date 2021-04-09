# vue-plugin-cli

vue-plugin-clit is a CLI templating utility that scaffolds a setup for creating Vue 3 plugins. It comes pre-installed
with Vue Router and Vuex.

## Install

If you want to use `vue-plugin-cli` to generate plugins, you can add it as a dev dependency of your project. To do so, simply open your terminal and execute the following command:

```sh
yarn add -D @formonsus/vue-plugin-cli
```

This package is published to GitHub Packages. Please check the official GitHub Docs to learn how to install this package: [docs](https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages#installing-a-package)

## Using the vue-plugin-cli

Usint the vue-plugin-cli is very simple. With the vue-plugin-cli installed, just run the following command:

```sh
yarn plugin-init
```

The wizzard will then prompt you for the following:
  - name: This is how your plugin will be named. Wizzard will use your current directory and create a new folder with the name you entered for your plugin.


## Developing your Plugin

vue-plugin-cli is using the Vue CLI for development process. With the Vue CLI installed, you can
start developing your plugin just by running the following commands:

```sh
# Navigate to plugin folder
cd path/to/plugin

# Start dev server
yarn serve
```

## Building your Plugin

Once your development is done, it's time to build your plugin so you can reuse it in other applications. (You can publish your plugin to npm for example). 

```sh
# Navigate to plugin folder
cd path/to/plugin

# Run build process
yarn build
```
