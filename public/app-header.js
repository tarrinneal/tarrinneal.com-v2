import {
  html,
  css,
  LitElement,
} from 'https://cdn.skypack.dev/pin/lit@v2.0.0-rc.2-TSkkpP2AxiJKOJvPcy1M/mode=imports,min/optimized/lit.js';

export class AppHeader extends LitElement {
  static get styles() {
    return css`
      .headerCont {
        border-bottom: 1px solid #e6e6e6;
        padding: 20px 20px 0 20px;
        margin-bottom: 10px;
        background-color: #f1f4ff;
        box-shadow: rgb(140 140 140) 0px 5px 10px;
      }
      .header {
        font-family: 'Roboto', sans-serif;
        display: inline-block;
        white-space: nowrap;
      }
      .name {
        display: block;
        margin-bottom: 0;
        margin-top: 0;
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
      .under-con {
        display: inline-block;
        position: absolute;
        transform: translate(0, -50px);
        z-index: -1;
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
      <div class="headerCont">
        <h1 class="header name">Tarrin Neal</h1>
        <h3 class="header title">Full Stack Web Developer</h3>
        <img
          src="assets/website-under-construction-bigalbaloo-stock.jpg"
          alt="Under Construction"
          width="200"
          class="under-con"
        />
        <div class="header button-container">
          <a href="#about-me"><h4 class="header about-me">About Me</h4></a>
          <a href="#skills"><h4 class="header skills">Skills</h4></a>
          <a href="#projects"><h4 class="header projects">Projects</h4></a>
          <a href="#contact"><h4 class="header contact">Contact</h4></a>
        </div>
      </div>
    `;
  }
}

customElements.define('app-header', AppHeader);
