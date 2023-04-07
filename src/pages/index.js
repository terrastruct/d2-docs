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

const exampleD2 = `logs: {
  shape: page
  style.multiple: true
}
user: User {shape: person}
network: Network {
  tower: Cell Tower {
    satellites: {
      shape: stored_data
      style.multiple: true
    }

    satellites -> transmitter
    satellites -> transmitter
    satellites -> transmitter
    transmitter
  }
  processor: Data Processor {
    storage: Storage {
      shape: cylinder
      style.multiple: true
    }
  }
  portal: Online Portal {
    UI
  }

  tower.transmitter -> processor: phone logs
}
server: API Server

user -> network.tower: Make call
network.processor -> server
network.processor -> server
network.processor -> server

server -> logs
server -> logs
server -> logs: persist

server -> network.portal.UI: display
user -> network.portal.UI: access {
  style.stroke-dash: 3
}
`;

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const renderDirectoryBanner = () => {
    return (
      <div className="Directory__Banner">
        <img className="Directory__Banner--Circles" src="/img/directory/circles.svg" />
        <img className="Directory__Banner--Icon" src="/img/d2_graphic.svg" />
        <h1>D2: Declarative Diagramming</h1>
        <p>A modern language that turns text to diagrams</p>
        <button
          className="Directory__Banner--Button"
          onClick={() => {
            window.location.href = "/tour/intro";
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
            <br />
            <br />
            For example, it takes the text below, and turns it into the image on the
            right.
          </div>
          <D2CodeBlock
            className="language-d2"
            containerClassName="Directory__Example--Code"
          >
            {exampleD2}
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
      title="Directory"
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
