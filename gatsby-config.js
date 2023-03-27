module.exports = {
  siteMetadata: {
    title: 'Scouras Consulting',
    description:
      'Scouras Consulting - Specializing in Imagine IFP App Development',
    keywords:
      'Scouras, Financial Consulting, Financial Apps, ImagineMobile, RSI Custom, MVB Integrator, TechExtend',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Scouras Consulting',
        short_name: 'Scouras Consulting',
        start_url: '/',
        background_color: '#333333',
        theme_color: '#333333',
        display: 'browser',
        icon: 'src/images/favicon.ico', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography.js`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
