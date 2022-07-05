import React from 'react'
import { Link } from 'gatsby'
import { link, mobilenav} from '../styles/mobilenav.module.css'

const MobileNav = props =>{
    return (
    <div className={mobilenav}>
        <Link className={link} to="/apps/">IFP Apps</Link>
        <Link className={link} to="/mobile/">ImagineMobile</Link>
        <Link className={link} to="/about/">About</Link>
        <Link className={link}to="/support/">Support</Link>
    </div>
    )
}

export default MobileNav