import {
  html,
  css,
  LitElement,
} from 'https://cdn.skypack.dev/pin/lit@v2.0.0-rc.2-TSkkpP2AxiJKOJvPcy1M/mode=imports,min/optimized/lit.js';

import { containerStyles } from './container-styles.js';

export class AppAboutMe extends LitElement {
  static get styles() {
    return [
      containerStyles,
      css`
        .aboutMeCont {
          margin-left: 20px;
        }
        @media only screen and (max-width: 1190px) {
          .aboutMeCont {
            margin-left: auto;
          }
        }
      `,
    ];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="container aboutMeCont">
        <h2 id="about-me" class="about-me title">About Me</h2>
        <p class="about-me main">
          I am a full-stack software engineer who loves to learn and find new
          ways to solve difficult problems.
          <br />
          <br />
          As a professional musician and instructor, I've spent my life
          mastering the skill of mastering skills. I also truly love to help
          others around me learn and grow as much as possible.
          <br />
          <br />
          A fascination for computers and technology has always been a part of
          my life. When I was young, computers always seemed to be the closest
          thing to magic that could exist. All I wanted to do was play with
          computers and see how they worked. As an adult, I've finally had the
          resources to really learn how to make that magic myself, and it has
          become my passion.
          <br />
          <br />
        </p>
      </div>
    `;
  }
}

customElements.define('app-about-me', AppAboutMe);
