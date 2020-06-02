module.exports = {
  siteMetadata: {
    title: `Tom Ekander - lessp`,
    description: `Software developer and musician based in Stockholm, Sweden.`,
    url: "https://lessp.dev",
    author: `@ekander_`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-97990632-2",
      },
    },
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
        name: `lessp-personal-website`,
        short_name: `lessp`,
        start_url: `/`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
