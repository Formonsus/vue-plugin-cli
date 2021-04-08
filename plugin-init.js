#! /usr/bin/env node

const path = require("path");
const fs = require("fs");
const ejs = require("ejs");
const prompts = require("prompts");
const chalk = require("chalk");
const updateCheck = require("update-check");


const pkg = require("./package");

// Object to store data from user input response.
const result = {
  npmName: "",
  update: false
}

// Exit the process.
function onCancel() {
  console.log("User canceled plugin-init script. Byee 👋");
  process.exit();
}

async function checkForCliToolUpdate() {
  let update = null;
  try {
    update = await updateCheck(pkg);
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
    initial: "my-plugin"
  };
  const response = await prompts(question, {
    onCancel: onCancel
  });
  result.npmName = response.npmName;
}

function createPluginProject(options) {
  const vars = {
    npmName: options.npmName,
    vueRouter: options.useRouter === "yes",
    vuex: options.useVuex === "yes"
  };

  const files = {
    common: [
      "build/rollup.config.js",
      "dev/serve.vue",
      ".browserslistrc",
      "babel.config.js",
      "src/components/counter.vue",
      "src/entry.esm.js",
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
      options.npmName,
      ...destPath.split("/")
    ]);

    ensureDirectoryExists(destPath);
    fs.writeFileSync(destPath, ejs.render(fs.readFileSync(srcPath).toString(), vars));
  });

  console.log(`
    Init is completed, your files have been generated and saved in the directory [${vars.npmName}] you specified above.
    Next steps to start plugin for development:

    1. cd ${vars.npmName}
    2. yarn
    3. yarn serve

    When you're ready, run "yarn build" to generate the redistributable version of your plugin.
  `);
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
