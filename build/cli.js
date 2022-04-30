#!/usr/bin/env node
"use strict";
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
fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
        console.error(err);
    }
    // file written successfully
});
console.log(createTemplate(componentName));
