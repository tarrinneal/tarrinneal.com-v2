import {
  html,
  css,
  LitElement,
} from 'https://cdn.skypack.dev/pin/lit@v2.0.0-rc.2-TSkkpP2AxiJKOJvPcy1M/mode=imports,min/optimized/lit.js';

import './app-header.js';
import './app-about-me.js';
import './app-skills.js';
import './app-projects.js';
import './app-testimonials.js';

export class AppMain extends LitElement {
  static get styles() {
    return css`
      #mainCase {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-right;
        gap: 20px;
        width: 100%;
      }
      .flexLeft {
        width: 67vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 20px;
      }
      .flexRight {
        width: 33vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 20px;
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
      <div id="mainCase">
        <div class="flexLeft">
          <app-about-me></app-about-me>
          <app-projects></app-projects>
        </div>
        <div class="flexRight">
          <app-skills></app-skills>
          <app-testimonials></app-testimonials>
        </div>
      </div>
    `;
  }
}

customElements.define('app-main', AppMain);

export const styles = {
  container: css``,
};
