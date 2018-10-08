module.exports = {
  siteMetadata: {
    title: 'Vitalstorm Landing Page',
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
    'gatsby-plugin-offline',
    `gatsby-plugin-sass`
  ],
}
