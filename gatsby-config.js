module.exports = {
  siteMetadata: {
    title: `Scouras Consulting`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-eslint`,
  ],
};
