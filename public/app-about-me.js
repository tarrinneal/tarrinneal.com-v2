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
          I am a full-stack software engineer who passionate about what I do and
          looking for work that is exciting and allows me to continue to learn.
          I really enjoy working in a collaborative environment, and being able
          to mentor others in the process.
          <br />
          <br />
          My life has been focused on technology as long as I can remember and
          have fallen in love with coding since the first line I wrote all the
          way back in 6th grade.
          <br />
          <br />
          My main stack is Javascript based, but I am confident I can work in
          any environment and with any tech stack that is needed.
        </p>
      </div>
    `;
  }
}

customElements.define('app-about-me', AppAboutMe);
