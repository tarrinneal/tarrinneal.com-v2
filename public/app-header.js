import {
  html,
  css,
  LitElement,
} from 'https://cdn.skypack.dev/pin/lit@v2.0.0-rc.2-TSkkpP2AxiJKOJvPcy1M/mode=imports,min/optimized/lit.js';

export class AppHeader extends LitElement {
  static get styles() {
    return css`
      .header {
        font-family: 'Roboto', sans-serif;
        display: inline-block;
        white-space: nowrap;
      }
      .name {
        display: block;
        margin-bottom: 0;
      }
      .button-container {
        display: flex;
        justify-content: space-around;
        float: right;
        width: 50%;
      }
      .title {
        min-width: 30%;
        max-width: 50%;
      }
      .about-me {
      }
      .skills {
      }
      .projects {
      }
      .contact {
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <h1 class="header name">Tarrin Neal</h1>
      <h3 class="header title">Full Stack Web Developer</h3>
      <div class="header button-container">
        <h4 class="header about-me">About Me</h4>
        <h4 class="header skills">Skills</h4>
        <h4 class="header projects">Projects</h4>
        <h4 class="header contact">Contact</h4>
      </div>
    `;
  }
}

customElements.define('app-header', AppHeader);
