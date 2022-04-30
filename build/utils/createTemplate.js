"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTemplate = void 0;
const { kebabToTitle } = require('./kebabToTitle');
// Returns template for web component
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
