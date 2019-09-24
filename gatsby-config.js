module.exports = {
  siteMetadata: {
    title: `Seth Flagg's Website`,
    description: `Hire me!!!!!!!!!!!!!!`,
    author: `@gatsbyjs`,
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
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: '${__dirname}/src/images/',
        name: 'images'
      },
    },
  ],
}