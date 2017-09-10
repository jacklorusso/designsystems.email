module.exports = {
  siteMetadata: {
    title: `Design Systems Weekly`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-77015609-3',
      }
    }
  ]
}
