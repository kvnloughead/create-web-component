"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFileName = exports.createTemplate = void 0;
const { kebabToTitle } = require('./kebabToTitle');
// Returns boilerplate for web component
const createTemplate = (componentName) => `
  import { LitElement, css, html } from 'lit';
  import { customElement } from 'lit/decorators.js';

  @customElement('${componentName}')
  class ${kebabToTitle(componentName)} extends LitElement {

    static styles = css\`
    
    \`;

    render() {
      return html\`
      
      \`;
    }
  }

  export default ${kebabToTitle(componentName)};
`;
exports.createTemplate = createTemplate;
// Returns file name for web component
const createFileName = (componentName) => {
    return `${kebabToTitle(componentName)}.ts`;
};
exports.createFileName = createFileName;
