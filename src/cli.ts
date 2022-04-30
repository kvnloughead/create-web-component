#!/usr/bin/env node

const yargs = require('yargs');
const path = require('path');
const fs = require('fs');

const { createTemplate, createFileName } = require('./utils/createContent');

const args = yargs
  .command('<component-name>', 'Name of the component')
  .demandCommand(1).argv;

const componentName = args._[0];
const fileContent = createTemplate(componentName);
const fileName = createFileName(componentName);

fs.writeFile(fileName, fileContent, (err: Error) => {
  if (err) {
    console.error(err);
  }
  console.log(`Web component ${fileName} written in current working directory`);
});
