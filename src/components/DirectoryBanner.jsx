import React from "react";

export default function Hello() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        background: "red",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        fontSize: "20px",
      }}
    >
      <p>
        Edit <code>pages/helloReact.js</code> and save to reload.
      </p>
    </div>
  );
}
