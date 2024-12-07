import React from "react";
import { PageMetadata } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import Head from '@docusaurus/Head';
import { CommandsTable } from "@site/src/components/CommandsTable";
import { commands } from "@site/src/tableHome/commands.table";
import { columns } from "@site/src/tableHome/columns.table";

export default function Start() {
  return (
    <>
      <PageMetadata
        title='Search bluesky.ms'
      />
      <Layout>
        <Head>
          <meta property="og:url" content="https://bluesky.ms" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Search bluesky.ms" />
          <meta property="og:description" content="Use this page to search for the Microsoft community on bluesky.ms." />
          <meta property="og:image" content="https://bluesky.ms/OpenGraphImage.png" />
          <meta property="og:image:alt" content="Screenshot of bluesky.ms home page with the text 'Crowd sourced database of Bluesky profiles!'" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="bluesky.ms" />
          <meta property="twitter:site" content="@merill" />
          <meta property="twitter:url" content="https://bluesky.ms" />
          <meta name="twitter:title" content="Search bluesky.ms" />
          <meta name="twitter:description" content="Use this page to search for the Microsoft community on bluesky.ms." />
          <meta name="twitter:image" content="https://bluesky.ms/OpenGraphImage.png" />
          <meta property="twitter:image:alt" content="Screenshot of bluesky.ms home page with the text 'Crowd sourced database of bluesky.ms profiles!'" />
        </Head>

        <main className="container margin-vert--lg">
          <div className="row">
            <div className="col col--offset-0">
              <h1 className="hero__title text-center">
              🦋 <span className="topBannerTitleText_Ferb">→ Bluesky.ms</span>
              </h1>
              <h1 className="title text-center">
              <span className="topBannerTitleText_Ferb">Follow and reconnect with the Microsoft community on Bluesky!</span>
              </h1>
                <p className="text-center">This site is now archived!</p>
                  
                <p className="text-center">Please visit the new site at <a href='https://bluesky.ms'>bluesky.ms</a>  </p>
            </div>
            <div className="col col--offset-0">
              <CommandsTable columns={columns} data={commands} applyFilter="" />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
