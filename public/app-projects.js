import {
  html,
  css,
  LitElement,
} from 'https://cdn.skypack.dev/pin/lit@v2.0.0-rc.2-TSkkpP2AxiJKOJvPcy1M/mode=imports,min/optimized/lit.js';

export class AppProjects extends LitElement {
  static get styles() {
    return css``;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <h2 id="projects" class="projects title">Projects</h1>
      <p class="projects content">
        Listf.in - Lead Architect and Engineer
        <br/>
        Web-based, Kanban-style, list-making application with intuitive nested navigation structure
        <br/>
        ● Designed system architecture for full-stack app using React, Express, DGraph and Auth0
        <br/>
        ● Created live interactive multi-user workspaces utilizing Apollo with GraphQL subscriptions
        <br/>
        ● Lead team of 10+ engineers on open source project with agile methodologies while fully remote
        <br/>
        <br/>
        Pacific Microphone - Technical Lead and System Design pacificmicroph.one | GitHub
        <br/>
        Custom app for actors to practice and understand sentiment of scripts
        <br/>
        ● Optimized team efficiency with agile methodologies and custom Git workflow process
        <br/>
        ● Designed system architecture for full-stack app using React, Express, MongoDB and OAuth
        <br/>
        ● Deployed SSL certified web server via AWS and Google domains to allow secure access to users
        <br/>
        ● Created full stack, multi-track audio recording and manipulation process to allow for
        emotion/sentiment analysis via IBM’s Watson and WebEmpath APIs
        <br/>
        <br/>
        HOPR - Front-End Engineer fec-hopper.herokuapp.com | GitHub
        <br/>
        Complete modern redesign of a client-facing retail web-portal utilizing legacy API<br/>
        ● Created custom image carousel using React and CSS3 to allow for responsive product navigation<br/>
        ● Designed adaptive web page layout using CSS Grid to precisely place elements on page in line
        with design document<br/>
        ● Managed data flow with Axios API calls and stateful React components to build an elegant user
        interface for purchasing products<br/><br/>
        Lily Pad - Backend Engineer GitHub<br/>
        Overhaul of outdated API and database system to increase throughput from 400 to 4000 rps<br/>
        ● Created custom ETL tool to restructure data from csv files into query first Cassandra schema<br/>
        ● Reduced latency by 50% for frequently queried data with Redis cache<br/>
        ● Increased throughput by 500% by horizontally scaling API using an NGINX load balancer and
        multiple Express servers
      </p>


    `;
  }
}

customElements.define('app-projects', AppProjects);
