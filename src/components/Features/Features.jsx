import React from "react";

import "./Features.scss";

export const Features = (props) => {
  return (
    <div className="Features">
      {props.features.map((feature) => {
        return (
          <div
            key={feature.title}
            className="Features__Item"
            onClick={() => {
              if (!feature.href) {
                return;
              }
              window.location.href = feature.href;
            }}
          >
            {feature.img && (
              <div className="Features__Item--Top">
                <div className="Features__Item--ImageContainer">
                  <img className="Features__Item--Image" src={feature.img} />
                </div>
              </div>
            )}
            <div key={feature.title} className="Features__Item--Bottom">
              {feature.icon && (
                <img className="Features__Item--Icon" src={feature.icon} />
              )}
              <span className="Features__Item--Title">{feature.title}</span>
              <span className="Features__Item--Description">{feature.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
