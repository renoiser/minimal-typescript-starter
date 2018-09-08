# Minimal TypeScript Starter

The main purpose of this starter kit is to give a very basic and minimalist structure to immediately start developing with [TypeScript](https://www.typescriptlang.org/).
Webpack is used to traspile the `.ts` files to javascript. Webpack Dev Server is used to start a development server that provides live reloading. This should be used for **development only**.

**Note: If you are looking for a starter kit with unit-testing, production build or more complex processes, THIS IS NOT THE STARTER KIT YOU NEED.**

## Pre-reqs

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/get-npm) installed on your machine.

## Install

Simply clone the repository.

```
git clone --depth=1 https://github.com/renoiser/minimal-typescript-starter <your_project_name>
```

Then install the project's dependencies:

```
npm i
```

## Run and Edit

```
npm start
```

Now the project is running at `http://localhost:8080/` and is watching for changes.
Edit `src/index.ts` and the browser will be reloaded automatically.
