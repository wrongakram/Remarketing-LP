module.exports = {
  siteMetadata: {
    title: 'Vitalstorm - Get Leads',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#f8f8f3',
        theme_color: '#f8f8f3',
        display: 'minimal-ui',
        icon: 'src/images/vitalstorm-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-58620967-2",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Enables Google Optimize using your container Id
        optimizeId: "lDLlpoChRLS43ZmVUK_mWg",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sass`
  ],
  pathPrefix: `/trustworthy-marketing`,
}
