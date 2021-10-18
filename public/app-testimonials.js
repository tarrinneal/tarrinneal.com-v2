import {
  html,
  css,
  LitElement,
} from 'https://cdn.skypack.dev/pin/lit@v2.0.0-rc.2-TSkkpP2AxiJKOJvPcy1M/mode=imports,min/optimized/lit.js';

import { containerStyles } from './container-styles.js';

export class AppTestimonials extends LitElement {
  static get styles() {
    return window.innerWidth < 1190
      ? containerStyles
      : [
          containerStyles,
          css`
            .testimonialsCont {
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
    <div class="container testimonialsCont">
      <h2 id="testimonials" class="testimonials title">Testimonials</h1>
      <p class="testimonials content">
      <strong>
      Devin Hight
      </strong>
      <br />
      <br />

      Tarrin has a natural ability to break even the most complex engineering problems into small, easily understandable and explainable bits. I had the pleasure of working with Tarrin in a learning environment where he was essentially in charge of making sure an entire group of people would learn and comprehend software engineering material. He is an incredibly gifted engineer with the unique ability to lead and empower people to understand difficult concepts while maintaining his upbeat and witty demeanor. His focus and drive are second to none. He will always find time to help out in any way he can, even while balancing his own responsibilities and projects. I would gladly recommend him for any leadership role without hesitation.
      <br />
      <br />
      <strong>
      Parker Stafford
      </strong>
      <br />
      <br />

      Tarrin is a fantastic engineer with great technical ability and natural curiosity. He's extremely dedicated to his work and is always determined to find a solution. Additionally, he is an excellent team member and collaborator. He is a strong community builder and works extremely hard to make sure every one on the team feels included and is up to speed on the project. He is generous with his time and is always willing to share resources or collaborate to get the job done. I enjoyed working with Tarrin immensely and cannot recommend him enough!
      <br />
      <br />
      <strong>
      Chris McVey
      </strong>
      <br />
      <br />

      I had the privilege of working with Tarrin on a number of projects and can honestly say that I have never seen such a gifted and well-rounded software engineer. Not only are his engineering skills top notch, but his ability to instantly make any team he is on flourish is truly something to behold. A good software engineer is always improving his or her abilities, but a great engineer is one who makes those around him better engineers as well. Hire Tarrin and you will get more than a person who will bring tremendous value to your company, you will get someone who will make the rest of his team more valuable. I can't recommend Tarrin enough.
      <br />
      <br />
      <strong>
      Irene Hodge
      </strong>
      <br />
      <br />

      Not only is Tarrin a very talented engineer that picks up new technologies quickly he's a wonderful team member that goes above and beyond to mentor junior members. While he is full of innovative ideas he is also mindful of the big picture and balances innovation with project constraints. His natural curiousity, kindness and communication would be an asset to any team.
      <br />
      <br />
      <strong>
      Timothy Nguyen
      </strong>
      <br />
      <br />

      Tarrin is an incredible software engineer who highly values his peers. He is a natural leader who builds up his community both socially and professionally by creating a collaborative working environment. He goes above and beyond to help those around him while still never failing to complete his own work.
      <br />
      <br />

      Tarrin's technical capabilities are also top-notch with proficiency across the stack. He has an unyielding determination when it comes to problem-solving and overcoming challenges. He executes strong analytical approaches that lead to unique solutions. Any team would be extremely lucky to have someone who brings as much to the table as Tarrin.
      <br />
      <br />
      <strong>
      Ross Russell
      </strong>
      <br />
      <br />

      Tarrin is the most community oriented engineer I've ever met. His strong leadership skills, and concern about people around him make working with him a great experience.
      <br />
      <br />

      Tarrin is incredibly skilled in software engineering, he picks up new concepts quickly, but he doesn't leave people behind. Not only does Tarrin not leave people behind, he elevates them. His positive attitude and approach to challenges rubs off on those around him.
      <br />
      <br />

      At the end of the day, there's a lot of engineers. But there aren't a lot of engineers with the ability to build strong communities, and trust. For Tarrin it comes naturally. I'm glad to have worked with him, and I'm hoping to work with him again in the future.
      </p>
    </div>

    `;
  }
}

customElements.define('app-testimonials', AppTestimonials);
