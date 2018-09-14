import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import favicon from './favicon.ico'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Scouras Consulting - Specializing in Imagine IFP App Development' },
        { name: 'keywords', content: 'Scouras, Financial Consulting, Financial Apps' },
      ]}
    >
    <link rel='icon' type="icon/png" sizes='16x16' href={favicon}/>
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        paddingTop: 100,
        margin: '0 auto',
        maxWidth: 960,
        // padding: '0px 1.0875rem 1.45rem',
        // paddingTop: 0,
      }}
    >

      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
