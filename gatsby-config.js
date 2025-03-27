module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://gatsby-starter-portfolio-minimal-theme.netlify.app/",
        manifestSettings: {
          favicon: "./content/images/favicon.png",
          siteName: "My Minimal Portfolio",
          shortName: "Portfolio",
          startUrl: "/",
          backgroundColor: "#FFFFFF",
          themeColor: "#000000",
          display: "minimal-ui",
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog",
          usePathPrefixForArticles: false,
        },
        navigation: {
          header: [
            { label: "Home", url: "/" },
            { label: "Projects", url: "/projects" },
            { label: "About", url: "/about" } // Add About page
            //{ label: "Contact", url: "/contact"}
          ],
        },
      },
    },
  ],
};
