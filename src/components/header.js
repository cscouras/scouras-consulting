import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.css'

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
            color: 'rgba(0,0,0,0.8)',
            textDecoration: 'none',
            background: 'none'
          }}
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
        </ul>
    </div>
  </div>
)

export default Header
