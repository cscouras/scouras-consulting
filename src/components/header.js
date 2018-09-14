import React from 'react'
import Link from 'gatsby-link'
import Nav from './Nav'
import styles from './header.module.css'
import PropTypes from 'prop-types'

class Header extends React.Component{
  render(){
    return (
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>
            <Link
              className={styles.headerLink}
              to="/"
            >
              {this.props.siteTitle}
            </Link>
          </h1>
          <Nav />
        </div>
      </div>
    )
  }
}


Header.propTypes = {
  siteTitle: PropTypes.string
}
export default Header
