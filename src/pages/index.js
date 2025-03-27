import React from "react";
import {
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Mohammed Chauhan's Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />

      </Page>
    </>
  );
}
