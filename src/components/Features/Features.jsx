import React from "react";

import "./Features.scss";

export const Features = (props) => {
  return (
    <div className="Features">
      {props.features.map((hl) => {
        return (
          <div key={hl.title} className="Features__Item">
            <div key={hl.title} className="Features__Item--Bottom">
              <span>{hl.title}</span>
              <span>{hl.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
