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
  version: "",
  npmName: "",
  componentName: "",
  language: "",
  update: false,
  useRouter: "",
  useVuex: ""
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

async function getVersion() {
  const question = {
    type: "select",
    name: "version",
    message: "Which version of Vue you want to use?",
    choices: [
      { title: "Vue 3 (recommended)", value: 3 },
      { title: "Vue 2", value: 2 }
    ],
    initial: 0
  };
  const response = await prompts(question, {
    onCancel: onCancel
  });
  result.version = response.version;
}

async function getName() {
  const question = {
    type: "text",
    name: "npmName",
    message: "What is the name of your Vue plugin?"
  };
  const response = await prompts(question, {
    onCancel: onCancel
  });
  result.npmName = response.npmName;
  result.componentName = response.npmName;
}

async function getLanguage() {
  const question = {
    type: "select",
    name: "language",
    message: "Do you want to use JavaScript or TypeScript?",
    choices: [
      { title: "TypeScript (recommended)", value: "ts" },
      { title: "JavaScript", value: "js" }
    ],
    initial: 0
  };
  const response = await prompts(question, {
    onCancel: onCancel
  });
  result.language = response.language;
}

async function useVueRouter() {
  const question = {
    type: "select",
    name: "router",
    message: "Do you want to install Vue Router?",
    choices: [
      { title: "Yes", value: "yes" },
      { title: "No", value: "no" }
    ],
    initial: 0
  };
  const response = await prompts(question, {
    onCancel: onCancel
  });
  result.useRouter = response.router;
}

async function useVuex() {
  const question = {
    type: "select",
    name: "vuex",
    message: "Do you want to install Vuex?",
    choices: [
      { title: "Yes", value: "yes" },
      { title: "No", value: "no" }
    ],
    initial: 0
  };
  const response = await prompts(question, {
    onCancel: onCancel
  });
  result.useVuex = response.vuex;
}

function createPluginProject(options) {
  const vars = {
    npmName: options.npmName,
    componentName: options.componentName,
    version: options.version,
    ts: options.language === "ts"
  };

  const files = {
    common: [
      "build/rollup.config.js",
      { "src/entry.esm.ts": `src/entry.esm.${options.language}` },
      { "src/entry.ts": `src/entry.${options.language}` },
      { "dev/serve.ts": `dev/serve.${options.language}` },
      { "dev/router.ts": `dev/router.${options.language}` },
      { "dev/store.ts": `dev/store.${options.language}` },
      "dev/serve.vue",
      ".browserslistrc",
      "babel.config.js",
      (options.language === "ts" && options.version === 2) ? "shims-tsx.d.ts" : null,
      (options.language === "ts") ? "shims-vue.d.ts" : null,
      (options.language === "ts") ? "tsconfig.json" : null,
      { "plugin-package.json": "package.json" }
    ]
  }

  const fileActions = [
    ...files.common.filter((entry) => entry)
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
      options.componentName,
      ...destPath.split("/")
    ]);

    ensureDirectoryExists(destPath);
    fs.writeFileSync(destPath, ejs.render(fs.readFileSync(srcPath).toString(), vars));
  });
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
  .then(getVersion)
  .then(getName)
  .then(getLanguage)
  .then(useVueRouter)
  .then(useVuex)
  .then(() => {
    createPluginProject(result);
  });
