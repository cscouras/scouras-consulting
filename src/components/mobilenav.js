import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/mobilenav.module.css'

const MobileNav = props =>{
    return (
    <div className={styles.mobilenav}>
        <Link to="/">Home</Link>
        <Link to="/apps/">IFP Apps</Link>
        <Link to="/mobile/">ImagineMobile</Link>
        <Link to="/about/">About</Link>
        <Link to="/contact/">Contact</Link>
    </div>
    )
}

export default MobileNav