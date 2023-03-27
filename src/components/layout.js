import React from 'react'

import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <div className="site">
      <Header siteTitle="Scouras Consulting" />
      <div className="siteContent">{children}</div>
      <Footer />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
