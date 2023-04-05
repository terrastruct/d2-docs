import React from "react";

import "./DirectoryBanner.scss";

export default function DirectoryBanner() {
  return (
    <div className="DirectoryBanner">
      <img className="DirectoryBanner__Circles" src="/img/directory/circles.svg" />
      <img className="DirectoryBanner__Icon" src="/img/d2_graphic.svg" />
      <h1>D2: Declarative Diagramming</h1>
      <p>
        A modern language that turns text to diagrams
      </p>
      <button
        className="DirectoryBanner__Button"
        onClick={() => {
          window.location.href = "/tour/intro";
        }}
      >
        Explore docs
      </button>
    </div>
  );
}
