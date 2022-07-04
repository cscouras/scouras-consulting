import React from 'react'
import { Link } from 'gatsby'
import { footer, categoryContainer, footerCategory, categoryHeader, categoryLinkContainer, link, } from '../styles/footer.module.css'

const Footer = props => (
    <div className={footer}>
        <div className={categoryContainer}>
            <div className={footerCategory}>
                <span className={categoryHeader}>IFP Apps</span>
                    <div className={categoryLinkContainer}>
                        <Link to="/rsicustom/" className={link}>RSI Custom</Link>
                        <Link to="/multivariate/" className={link}>MVB Integrator</Link>
                        <Link to="/techextend/" className={link}>TechExtend</Link>
                    </div>
            </div>
            <div className={footerCategory}>
                <span className={categoryHeader}>Mobile App</span>
                    <div className={categoryLinkContainer}>
                        <Link to="/mobile/" className={link}>ImagineMobile</Link>
                        <Link to="/mobilepromo/" className={link}>Overview</Link>
                        <Link to="/mobileinstallation/" className={link}>Installation</Link>
                        <Link to="/mobileconfiguration/" className={link}>Configuration</Link>
                        <Link to="/mobilenavigation/" className={link}>Navigation</Link>
                    </div>
            </div>
            <div className={footerCategory}>
                <span className={categoryHeader}>Company</span>
                    <div className={categoryLinkContainer}>
                        <Link to="/about/" className={link}>About</Link>
                        <Link to="/contact/" className={link}>Contact</Link>
                        <Link to="/support/" className={link}>Support</Link>
                    </div>
            </div>
        </div>
    </div>
)

export default Footer