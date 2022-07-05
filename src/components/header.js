import React from 'react'
import { Link } from 'gatsby'
import Nav from './nav'
import { container, flex, headerH1, logoLink} from '../styles/header.module.css'

const Header = ({ siteTitle }) => (
  <div className={container}>
    <div className={flex}>
      <h1 className={headerH1}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            background: 'none',
          }}
          className={logoLink}
        >
          {siteTitle}
        </Link>
      </h1>

      <Nav />
    </div>
  </div>
)

export default Header
