import {
  html,
  css,
  LitElement,
} from 'https://cdn.skypack.dev/pin/lit@v2.0.0-rc.2-TSkkpP2AxiJKOJvPcy1M/mode=imports,min/optimized/lit.js';

import { containerStyles } from './container-styles.js';

export class AppAboutMe extends LitElement {
  static get styles() {
    return [containerStyles, css``];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="container">
        <h2 id="about-me" class="about-me title">About Me</h2>
        <p class="about-me main">
          I am a software developer with a passion for creating and problem
          solving. I am currently looking for a position in the software
          development field.
        </p>
      </div>
    `;
  }
}

customElements.define('app-about-me', AppAboutMe);
