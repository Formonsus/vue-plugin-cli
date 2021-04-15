#! /usr/bin/env node
const path = require("path");
const fs = require("fs");
const ejs = require("ejs");
const prompts = require("prompts");
const chalk = require("chalk");
const updateCheck = require("update-check");
const shelljs = require("shelljs");

const pkg = require("./package");

// Object to store data from user input response.
const result = {
  npmName: "",
  update: false
}

// Exit the process.
function onCancel() {
  console.log("Byee 👋");
  process.exit();
}

async function checkForCliToolUpdate() {
  let update = null;
  try {
    const current = pkg.version;
    console.log(chalk.magenta(`Vue Plugin CLI v${current}`));

    update = await updateCheck(pkg);

    if (update) {

      const latest = update.latest;

      if (current !== latest) {

        console.log(`
      ┌──────────────────────────────────────────┐
      │                                          │
      │   New version available ${chalk.magenta(current)} → ${chalk.green(latest)}   │
      │                                          │
      └──────────────────────────────────────────┘
      `)
      }
    }
  } catch (err) {
    const errorMessage = `${pkg.name} failed to check for self update -->`;
    console.error(`${chalk.black.bgRed(errorMessage)}${err}`);
    update = null;
  }

  if (update) {
    result.update = update;
  }
}

async function getName() {
  const question = {
    type: "text",
    name: "npmName",
    message: "What is the name of your Vue plugin?",
    validate(val) {
      return val !== "";
    }
  };
  const response = await prompts(question, {
    onCancel: onCancel
  });
  result.npmName = response.npmName;
}

function createPluginProject(options) {
  let savePath = process.env.INIT_CWD;

  if (savePath === undefined) {
    savePath = "."
  }
  console.log(`✨ Creating project in ${chalk.yellow(savePath + "/" + options.npmName)}`);
  console.log(`🚀 Invoking generator...`);
  const vars = {
    npmName: options.npmName,
    pluginName: pascalify(options.npmName)
  };

  const files = {
    common: [
      "build/rollup.config.js",
      "dev/serve.vue",
      ".browserslistrc",
      ".editorconfig",
      ".eslintrc.js",
      ".prettierrc",
      "jsconfig.json",
      "jest.config.js",
      "babel.config.js",
      "src/components/counter.vue",
      "src/components/HelloWorld.vue",
      "tests/unit/HelloWorld.spec.js",
      "src/index.js",
      "src/entry.js",
      "dev/serve.js",
      { "plugin-package.json": "package.json" }
    ],
    vueRouter: [
      "src/router/routes.js",
      "dev/router/index.js",
      "dev/router/routes.js",
      "dev/router/views/home.vue",
      "src/router/views/home.vue",
      "src/router/views/plugin.vue"
    ],
    vuex: [
      "dev/state/store.js",
      "src/state/counter/actions.js",
      "src/state/counter/mutations.js",
      "src/state/counter/state.js",
      "src/state/counter/index.js"
    ]
  }

  const fileActions = [
    ...files.common.filter((entry) => entry),
    ...files.vueRouter.filter((entry) => entry),
    ...files.vuex.filter((entry) => entry)
  ];

  fileActions.forEach((fileAction) => {
    let srcPath;
    let destPath;

    if (typeof fileAction === "string") {
      srcPath = fileAction;
      destPath = fileAction;
    } else {
      [[srcPath, destPath]] = Object.entries(fileAction);
    }

    srcPath = path.join.apply(null, [
      __dirname,
      "templates",
      "plugin",
      ...srcPath.split("/")
    ]);

    destPath = path.join.apply(null, [
      savePath + "/" + options.npmName,
      ...destPath.split("/")
    ]);

    ensureDirectoryExists(destPath);
    fs.writeFileSync(destPath, ejs.render(fs.readFileSync(srcPath).toString(), vars));
  });

  // Change current dir
  process.chdir(savePath);
  process.chdir(`./${vars.npmName}`);

  console.log(`📦 Installing additional dependencies. This might take a while...`);
  shelljs.exec("yarn");

  console.log(`\n`);
  console.log(`🎉 Successfully created project ${chalk.yellow(vars.npmName)}.`);
  console.log(`👉 Get started with the following commands:`)
  console.log(`\n`);
  console.log(` ${chalk.gray("$")} ${chalk.cyan("cd " + vars.npmName)}`);
  console.log(` ${chalk.gray("$")} ${chalk.cyan("yarn serve")}`);
  console.log(`\n`);
}

const pascalify = (str) => {
  const camelized = str.replace(/-([a-z])/g, (c) => c[1].toUpperCase());
  return camelized.charAt(0).toUpperCase() + camelized.slice(1);
}

const ensureDirectoryExists = (filePath) => {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExists(dirname);
  return fs.mkdirSync(dirname);
};

checkForCliToolUpdate()
  .then(getName)
  .then(() => {
    createPluginProject(result);
  });
