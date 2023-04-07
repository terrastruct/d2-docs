import React from "react";

import "./Features.scss";

export const Features = (props) => {
  const renderFeatureImage = (feature) => {
    if (!feature.img) {
      return null;
    }
    return (
      <div className="Features__Item--Top">
        <div className="Features__Item--ImageContainer">
          {!feature.img.endsWith("png") && (
            <div
              className="Features__Item--Image"
              dangerouslySetInnerHTML={{ __html: feature.img }}
            ></div>
          )}
          {feature.img.endsWith("png") && (
            <img className="Features__Item--Image" src={feature.img} />
          )}
        </div>
      </div>
    );
  };

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
            {renderFeatureImage(feature)}
            <div key={feature.title} className="Features__Item--Bottom">
              {feature.icon && (
                <img
                  className="Features__Item--Icon"
                  src={require("@site/static/features/icons/" + feature.icon).default}
                />
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
