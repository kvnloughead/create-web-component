const { kebabToTitle } = require('./kebabToTitle');

// Returns boilerplate for web component
export const createTemplate = (componentName: string) => `
  import { LitElement, css, html } from 'lit';
  import { customElement } from 'lit/decorators.js';

  @customElement('${componentName}')
  class ${kebabToTitle(componentName)} extends LitElement {
    static styles = css\`\`;

    render() {
      return html\`\`;
    }
  }

  export default ${kebabToTitle(componentName)};
`;

// Returns file name for web component
export const createFileName = (componentName: string) => {
  return `${kebabToTitle(componentName)}.ts`;
};
