module.exports = {
  siteMetadata: {
    title: `Jennifer Loecker`,
    description: `GatsbyJS starter blog with the Fresh theme.`,
    author: `@mishal23`,
    siteUrl: `https://gatsby-starter-fresh.netlify.app`,
    about: `Hi! My name is Jennifer Loecker. Welcome to my portfolio! I'm a React/React Native/iOS developer open to new opportunities. Have a look around at some of my past work and don't hesitate to contact me! Thanks!`,
    keywords: [
      "mishal23",
      "Mishal Shah",
      "Gatsby",
      "Fresh",
      "themes",
      "blog",
      "PWA",
      "Google Analytics",
      "markdown",
      "code highlighting",
      "SEO",
      "social media",
      "sitemap",
      "contact form",
    ],
    social: {
      github: `jenniferloecker`,
      email: `jenniferloecker@gmail.com`,
      linkedin: `jenloecker`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/favicon-32x32.png",
        start_url: "/about",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {},
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-images`,
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<GA Code>",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}
