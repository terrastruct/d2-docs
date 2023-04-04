import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Layout from "@theme/Layout";

import "./Directory.scss";

import DirectoryBanner from "@site/src/components/Directory/DirectoryBanner/DirectoryBanner";
import GetInvolved from "@site/src/components/Directory/GetInvolved/GetInvolved";
import FeatureHighlights from "@site/src/components/Directory/FeatureHighlights";
import MoreFeatures from "@site/src/components/Directory/MoreFeatures";

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Directory"
      description={siteConfig.tagline}
      keywords={siteConfig.customFields.keywords}
      metaImage={useBaseUrl("img/opengraph.png")}
    >
      <div className="Directory">
        <DirectoryBanner />
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
