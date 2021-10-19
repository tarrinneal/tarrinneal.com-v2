import {
  html,
  css,
  LitElement,
} from 'https://cdn.skypack.dev/pin/lit@v2.0.0-rc.2-TSkkpP2AxiJKOJvPcy1M/mode=imports,min/optimized/lit.js';

import './app-header.js';
import './app-contacts.js';
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
        align-items: top;
        gap: 20px;
        max-width: 100%;
      }

      @media only screen and (max-width: 1190px) {
        #mainCase {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: top;
          gap: 20px;
          margin: auto;
          max-width: 800px;
          min-width: 442px;
        }
      }

      @media only screen and (max-width: 855px) {
        #mainCase {
          margin: auto 20px;
        }
      }

      .flexLeft {
        width: 60vw;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 20px;
      }
      .flexRight {
        width: 40vw;
        max-width: 800px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 20px;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
    this.width = window.innerWidth;
  }

  firstUpdated() {
    window.addEventListener('resize', () =>
      setInterval(() => this.checkWidth(), 100)
    );
  }

  checkWidth() {
    if (
      (this.width > 1190 && window.innerWidth < 1190) ||
      (this.width < 1190 && window.innerWidth > 1190) ||
      (this.width < 700 && window.innerWidth > 700) ||
      (this.width > 700 && window.innerWidth < 700)
    ) {
      this.requestUpdate();
    }
    this.width = window.innerWidth;
  }

  render() {
    if (window.innerWidth < 700) {
      return html`
        <app-header></app-header>
        <div id="mainCase">
          <app-contacts></app-contacts>
          <app-about-me></app-about-me>
          <app-skills></app-skills>
          <app-projects></app-projects>
          <app-testimonials></app-testimonials>
        </div>
      `;
    } else if (window.innerWidth < 1190) {
      return html`
        <app-header></app-header>
        <div id="mainCase">
          <app-about-me></app-about-me>
          <app-skills></app-skills>
          <app-projects></app-projects>
          <app-testimonials></app-testimonials>
        </div>
      `;
    }
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
