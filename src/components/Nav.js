import React from 'react'
import Link from 'gatsby-link'
import styles from './Nav.module.css'
// import PropTypes from 'prop-types'

class Nav extends React.Component {
    render() {
        return (
            <nav className={styles.navbar}>
                <Link to="apps">IFP Apps</Link>
                <Link to="/mobile/">Android App</Link>
                <Link to="/about/">About</Link>
                <Link to="/contact/">Contact</Link>
                <div className={styles.hamburger}>
                    <span ></span>
                </div>
            </nav>
        )
    }

}



export default Nav