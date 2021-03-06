#! /usr/bin/env node
const path = require("path");
const fs = require("fs");
const ejs = require("ejs");
const prompts = require("prompts");
const chalk = require("chalk");
const shelljs = require("shelljs");

const pkg = require("./package");

// Object to store data from user input response.
const result = {
  npmName: "",
  update: false,
};

// Exit the process.
function onCancel() {
  console.log("Byee 👋");
  process.exit();
}

async function displayInstalledVersion() {
  const current = pkg.version;
  console.log(chalk.magenta(`Vue Plugin CLI v${current}`));
}

async function getName() {
  const question = {
    type: "text",
    name: "npmName",
    message: "What is the name of your Vue plugin?",
    validate(val) {
      return val !== "";
    },
  };
  const response = await prompts(question, {
    onCancel: onCancel,
  });
  result.npmName = response.npmName;
}

function createPluginProject(options) {
  let savePath = process.env.INIT_CWD;

  if (savePath === undefined) {
    savePath = ".";
  }
  console.log(
    `✨ Creating project in ${chalk.yellow(savePath + "/" + options.npmName)}`
  );
  console.log(`🚀 Invoking generator...`);
  const vars = {
    npmName: options.npmName,
    pluginName: pascalify(options.npmName),
  };

  const files = {
    common: [
      ".browserslistrc",
      ".editorconfig",
      ".eslintrc.js",
      ".prettierrc",
      "jsconfig.json",
      "babel.config.js",
      "vue.config.js",
      "README.md",
      { "plugin-package.json": "package.json" },
    ],
    src: [
      "src/components/Counter.vue",
      "src/components/HelloWorld.vue",
      "src/index.js",
    ],
    dev: ["dev/serve.js", "dev/serve.vue"],
    build: ["build/rollup.config.js"],
    vueRouter: [
      "src/router/routes.js",
      "src/router/layouts/PluginLayout.vue",
      "src/router/views/Welcome.vue",
      "dev/router/index.js",
      "dev/router/routes.js",
      "dev/router/views/Home.vue",
    ],
    vuex: [
      "dev/state/store.js",
      "src/store/counter/actions.js",
      "src/store/counter/mutations.js",
      "src/store/counter/state.js",
      "src/store/counter/index.js",
    ],
    unit: ["tests/unit/HelloWorld.spec.js", "jest.config.js"],
    e2e: [
      "tests/e2e/.eslintrc.js",
      "tests/e2e/plugins/index.js",
      "tests/e2e/specs/test.js",
      "tests/e2e/support/commands.js",
      "tests/e2e/support/index.js",
      "cypress.json",
    ],
  };

  const fileActions = [
    ...files.common.filter((entry) => entry),
    ...files.src.filter((entry) => entry),
    ...files.dev.filter((entry) => entry),
    ...files.build.filter((entry) => entry),
    ...files.vueRouter.filter((entry) => entry),
    ...files.vuex.filter((entry) => entry),
    ...files.unit.filter((entry) => entry),
    ...files.e2e.filter((entry) => entry),
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
      ...srcPath.split("/"),
    ]);

    destPath = path.join.apply(null, [
      savePath + "/" + options.npmName,
      ...destPath.split("/"),
    ]);

    ensureDirectoryExists(destPath);
    fs.writeFileSync(
      destPath,
      ejs.render(fs.readFileSync(srcPath).toString(), vars)
    );
  });

  // Change current dir
  process.chdir(savePath);
  process.chdir(`./${vars.npmName}`);

  console.log(
    `📦 Installing additional dependencies. This might take a while...`
  );
  shelljs.exec("yarn");

  console.log(`\n`);
  console.log(`🎉 Successfully created project ${chalk.yellow(vars.npmName)}.`);
  console.log(`👉 Get started with the following commands:`);
  console.log(`\n`);
  console.log(` ${chalk.gray("$")} ${chalk.cyan("cd " + vars.npmName)}`);
  console.log(` ${chalk.gray("$")} ${chalk.cyan("yarn serve")}`);
  console.log(`\n`);
}

const pascalify = (str) => {
  const camelized = str.replace(/-([a-z])/g, (c) => c[1].toUpperCase());
  return camelized.charAt(0).toUpperCase() + camelized.slice(1);
};

const ensureDirectoryExists = (filePath) => {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExists(dirname);
  return fs.mkdirSync(dirname);
};

displayInstalledVersion()
  .then(getName)
  .then(() => {
    createPluginProject(result);
  });
