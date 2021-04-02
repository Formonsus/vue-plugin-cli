#! /usr/bin/env node

const path = require("path");
const fs = require("fs");
const prompts = require("prompts");
const chalk = require("chalk");
const updateCheck = require("update-check");


const pkg = require("./package");

// Object to store data from user input response.
const result = {
  version: "",
  pluginName: "",
  language: ""
}

// Exit the process.
function onCancel() {
  console.log("User canceled plugin-init script. Byee 👋");
  process.exit();
}

async function checkForUpdates() {
  try {
    console.log("Checking for update....");
  } catch(err) {
    console.error("Failed to update vue-plugin-cli package");
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
    name: "pluginName",
    message: "What is the name of your Vue plugin?"
  };
  const response = await prompts(question, {
    onCancel: onCancel
  });
  result.pluginName = response.pluginName;
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

checkForUpdates()
  .then(getVersion)
  .then(getName)
  .then(getLanguage)
  .then(() => {
    console.log("Result: ", result);
  });