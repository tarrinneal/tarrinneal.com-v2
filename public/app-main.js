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
    return window.innerWidth < 1190
      ? css`
          #mainCase {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: left;
            gap: 20px;
            margin: 0 20px;
          }
        `
      : css`
          #mainCase {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-right;
            gap: 20px;
            width: 100%;
          }
          .flexLeft {
            width: 60vw;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 20px;
          }
          .flexRight {
            width: 40vw;
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

  updated() {
    console.log('updated');
  }
}

customElements.define('app-main', AppMain);

export const styles = {
  container: css``,
};
