import React from "react";

import "./GetInvolved.scss";

const InvolvedItem = (props) => {
  return (
    <div key={props.title} className="GetInvolved__Item">
      <span className="GetInvolved__Item--Title">{props.title}</span>
      <span className="GetInvolved__Item--Description">{props.description}</span>
      <span className="GetInvolved__Item--CTA">{props.cta}</span>
      <div className="GetInvolved__Item--Right">
        <img className="GetInvolved__Item--Image" src={props.img} />
      </div>
    </div>
  );
};

export const GetInvolved = () => {
  return (
    <div className="GetInvolved">
      <InvolvedItem
        title="Join D2's community"
        description="Discord is our preferred way of communication. Our team is online and available weekdays from 9am - 6pm PST. Get help, share ideas, and show your work!"
        cta="Join our community"
        img="/features/discord.svg"
      />
      <InvolvedItem
        title="Continue learning"
        description="Learn about lalalala from the authors of D2. If you’ve contributed to our repo and would like to publish an article, email us at info@d2lang.com"
        cta="Read our blog posts"
        img="/features/blog.svg"
      />
    </div>
  );
};

export default GetInvolved;
