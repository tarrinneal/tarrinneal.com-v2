import {
  html,
  css,
  LitElement,
} from 'https://cdn.skypack.dev/pin/lit@v2.0.0-rc.2-TSkkpP2AxiJKOJvPcy1M/mode=imports,min/optimized/lit.js';

import { containerStyles } from './container-styles.js';

export class AppSkills extends LitElement {
  static get styles() {
    return window.innerWidth < 1031
      ? containerStyles
      : [
          containerStyles,
          css`
            .skillsCont {
              margin-right: 20px;
            }
          `,
        ];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="container skillsCont">
        <h2 id="skills" class="skills title">Skills</h1>
        <p class="skills content">
          Front End - JavaScript | React | Flutter | Dart | jQuery | Axios | HTML | CSS | Webpack | Babel
          <br />
          Back End - Node/Express | GraphQL | Dgraph | MongoDB | MySQL | Cassandra | Redis | NGINX
          <br />
          Tools - Git | GitHub | REST | CRUD | AWS | Heroku | Jest | Enzyme | Altair | Postman
        </p>
      </div>
    `;
  }
}

customElements.define('app-skills', AppSkills);
