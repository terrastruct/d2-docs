import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Layout from "@theme/Layout";

import "./Directory.scss";

import GetInvolved from "@site/src/components/Directory/GetInvolved/GetInvolved";
import FeatureHighlights from "@site/src/components/Directory/FeatureHighlights";
import MoreFeatures from "@site/src/components/Directory/MoreFeatures";
import D2CodeBlock from "@theme/CodeBlock";
import Example from "@site/static/img/generated/terminal-theme.svg2";
import ExampleCode from "@site/static/bespoke-d2/terminal-theme.d2";

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const renderDirectoryBanner = () => {
    return (
      <div className="Directory__Banner">
        <img
          className="Directory__Banner--Circles"
          src="/img/directory/circles.svg"
          alt="Decorative circles"
        />
        <img
          className="Directory__Banner--Icon"
          src="/img/d2_graphic.svg"
          alt="D2 logo"
        />
        <h1>D2: Declarative Diagramming</h1>
        <p>A modern language that turns text to diagrams</p>
        <button
          className="Directory__Banner--Button"
          onClick={() => {
            window.location.href = "/tour/intro/";
          }}
        >
          Explore docs
        </button>
      </div>
    );
  };

  const renderExample = () => {
    return (
      <div className="Directory__Example">
        <div className="Directory__Example--Left">
          <div>
            Create beautiful diagrams in minutes. Simple syntax. Endlessly customizable.
            D2 is the fastest and easiest way to get a mental model from your head onto
            the screen, then make edits with your team.
          </div>
          <D2CodeBlock
            className="language-d2"
            containerClassName="Directory__Example--Code"
          >
            {ExampleCode}
          </D2CodeBlock>
        </div>
        <div
          className="Directory__Example--Right"
          dangerouslySetInnerHTML={{ __html: Example }}
        ></div>
      </div>
    );
  };

  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}
      keywords={siteConfig.customFields.keywords}
      metaImage={useBaseUrl("img/opengraph.png")}
    >
      <div className="Directory">
        {renderDirectoryBanner()}
        {renderExample()}
        <h1>Feature highlights</h1>
        <FeatureHighlights />
        <h1>More features</h1>
        <MoreFeatures />
        <h1>Get involved</h1>
        <GetInvolved />
      </div>
    </Layout>
  );
}
