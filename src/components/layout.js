import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
        //Marchex
        <script type="text/javascript">
        vs_account_id      = "CA6phErgoUEGfQDm";
        </script>
        <script type="text/javascript" src="https://rw1.calls.net/euinc/number-changer.js">
        </script>

        <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
