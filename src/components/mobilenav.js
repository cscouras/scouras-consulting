import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/mobilenav.module.css'

const MobileNav = props =>{
    return (
    <div className={styles.mobilenav}>
        <Link className={styles.link} to="/apps/">IFP Apps</Link>
        <Link className={styles.link} to="/mobile/">ImagineMobile</Link>
        <Link className={styles.link} to="/about/">About</Link>
        <Link className={styles.link}to="/support/">Support</Link>
    </div>
    )
}

export default MobileNav