import {
  html,
  css,
  LitElement,
} from 'https://cdn.skypack.dev/pin/lit@v2.0.0-rc.2-TSkkpP2AxiJKOJvPcy1M/mode=imports,min/optimized/lit.js';

export class AppContact extends LitElement {
  static get styles() {
    return css``;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <h2 id="contact" class="contact title">Contact</h1>
      <p class="contact content">
        Phone: <a href="tel:+1-360-624-2170">(360) 624-2170</a>
        <br />
        Email: <a href="mailto:tarrinneal@gmail.com">Tarrinneal@gmail.com</a>
      </p>
    `;
  }
}

customElements.define('app-contact', AppContact);
