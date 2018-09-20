import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/header.module.css'

const ListLink = props => (
  <li className={styles.navItem}>
    <Link to={props.to} >{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <div className={styles.container}  >
    <div className={styles.flex}>
      <h1>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            background: 'none'
          }}
          className={styles.logoLink}
        >
          {siteTitle}
        </Link>
      </h1>

      <ul className={styles.navLinks}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/apps/">IFP Apps</ListLink>
          <ListLink to="/mobile/">ImagineMobile</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          <div className={styles.hamburger}><span></span></div>
        </ul>
    </div>
  </div>
)

export default Header
