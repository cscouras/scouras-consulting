import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/footer.module.css'

const Footer = props => (
    <div className={styles.footer}>
        <div className={styles.categoryContainer}>
            <div className={styles.footerCategory}>
                <span className={styles.categoryHeader}>IFP Apps</span>
                <Link to="/rsicustom/" className={styles.link}>RSI Custom</Link>
                <Link to="/multivariate/" className={styles.link}>MVB Integrator</Link>
                <Link to="/techextend/" className={styles.link}>TechExtend</Link>
            </div>
            <div className={styles.footerCategory}>
                <span className={styles.categoryHeader}>Mobile App</span>
                <Link to="/mobile/" className={styles.link}>ImagineMobile</Link>
                <Link to="/mobilepromo/" className={styles.link}>Overview</Link>
                <Link to="/mobileinstallation/" className={styles.link}>Installation</Link>
                <Link to="/mobileconfiguration/" className={styles.link}>Configuration</Link>
                <Link to="/mobilenavigation/" className={styles.link}>Navigation</Link>
            </div>
            <div className={styles.footerCategory}>
                <span className={styles.categoryHeader}>Company</span>
                <Link to="/about/" className={styles.link}>About</Link>
                <Link to="/contact/" className={styles.link}>Contact</Link>
                <Link to="/support/" className={styles.link}>Support</Link>
            </div>
        </div>
    </div>
)

export default Footer