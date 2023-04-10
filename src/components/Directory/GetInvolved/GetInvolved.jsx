import React from "react";

import "./GetInvolved.scss";

const InvolvedItem = (props) => {
  return (
    <div key={props.title} className="GetInvolved__Item">
      <span className="GetInvolved__Item--Title">{props.title}</span>
      <span className="GetInvolved__Item--Description">{props.description}</span>
      <span
        className="GetInvolved__Item--CTA"
        onClick={() => {
          window.location.href = props.href;
        }}
      >
        {props.cta}
      </span>
      <div className="GetInvolved__Item--Right">
        <img
          className="GetInvolved__Item--Image"
          src={require("@site/static/features/icons/" + props.img).default}
        />
      </div>
    </div>
  );
};

export const GetInvolved = () => {
  return (
    <div className="GetInvolved">
      <InvolvedItem
        title="Chat on Discord"
        description="Hangout, talk about diagrams, get help, give feedback and see early previews of what's coming next."
        cta="Go to Discord"
        img="discord.svg"
        href="https://discord.com/invite/pbUXgvmTpU"
      />
      <InvolvedItem
        title="Check out our blog"
        description="Technical blog posts from the authors of D2 on a variety of topics from feature deep dives to how things were built."
        cta="Go to blog"
        img="blog.svg"
        href="/blog"
      />
    </div>
  );
};

export default GetInvolved;
