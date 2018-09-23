import React from 'react'
import { Link } from 'gatsby'
import Nav from './nav'
import styles from '../styles/header.module.css'

const Header = ({ siteTitle }) => (
  <div className={styles.container}>
    <div className={styles.flex}>
      <h1 className={styles.headerH1}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            background: 'none',
          }}
          className={styles.logoLink}
        >
          {siteTitle}
        </Link>
      </h1>

      <Nav />
    </div>
  </div>
)

export default Header
