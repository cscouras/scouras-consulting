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
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render=  {data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Scouras Consulting - Specializing in Imagine IFP App Development' },
            { name: 'keywords', content: 'Scouras, Financial Consulting, Financial Apps, ImagineMobile, RSI Custom, MVB Integrator, TechExtend' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="site">
        <Header siteTitle={data.site.siteMetadata.title} />
           <div className="siteContent">{children}</div>
        <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout