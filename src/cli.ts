#!/usr/bin/env node

const yargs = require('yargs');
const path = require('path');
const fs = require('fs');

const { createTemplate } = require('./utils/createTemplate');

const args = yargs
  .command('<component-name>', 'Name of the component')
  .demandCommand(1).argv;

const componentName = args._[0];

console.log(createTemplate(componentName));
