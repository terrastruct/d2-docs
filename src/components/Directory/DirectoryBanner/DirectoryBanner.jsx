import React from "react";

import "./DirectoryBanner.scss";

export default function DirectoryBanner() {
  return (
    <div className="DirectoryBanner">
      <img className="DirectoryBanner__Circles" src="/img/directory/circles.svg" />
      <img className="DirectoryBanner__Icon" src="/img/d2_graphic.svg" />
      <h1>D2: Declarative Diagramming</h1>
      <p>
        A free open-source language created by <strong>Terrastruct</strong>
      </p>
    </div>
  );
}
