import {
  html,
  css,
  LitElement,
} from 'https://cdn.skypack.dev/pin/lit@v2.0.0-rc.2-TSkkpP2AxiJKOJvPcy1M/mode=imports,min/optimized/lit.js';

import './app-header.js';
import './app-about-me.js';
import './app-skills.js';
import './app-projects.js';
import './app-contact.js';

export class AppMain extends LitElement {
  static get styles() {
    return css`
      p {
        color: inherit;
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String },
    };
  }

  constructor() {
    super();
    this.name = 'Somebody';
  }

  render() {
    return html`
      <app-header></app-header>
      <app-about-me></app-about-me>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-contact></app-contact>
    `;
  }
}

customElements.define('app-main', AppMain);
