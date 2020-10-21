module.exports = {
  siteMetadata: {
    title: `Hyungjun Kim`,
    description: `A portfolio webpage of Hyungjun Kim`,
    author: `@rilakkim`,
    googleSiteVerification: `KE_WKT9NY5_rhqb8cI3rSQcSluoPODsJ2YP2kJLhZDY`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/svg/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Alegreya Sans:400,700,800', 'Damascus']
        }
      }
    }
  ],
}
