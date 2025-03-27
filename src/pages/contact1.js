import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function ImprintPage() {
  return (
    <>
      <Seo title="Contact" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="contact1" heading="Get in Touch" />
      </Page>
    </>
  );
}
