import {
  html,
  css,
  LitElement,
} from 'https://cdn.skypack.dev/pin/lit@v2.0.0-rc.2-TSkkpP2AxiJKOJvPcy1M/mode=imports,min/optimized/lit.js';

export class AppSkills extends LitElement {
  static get styles() {
    return css``;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <h2 class="skills title">Skills</h1>
      <p class="skills content">
        Front End - JavaScript | React | Flutter | Dart | jQuery | Axios | HTML | CSS | Webpack | Babel
        <br />
        Back End - Node/Express | GraphQL | Dgraph | MongoDB | MySQL | Cassandra | Redis | NGINX
        <br />
        Tools - Git | GitHub | REST | CRUD | AWS | Heroku | Jest | Enzyme | Altair | Postman
      </p>
    `;
  }
}

customElements.define('app-skills', AppSkills);
