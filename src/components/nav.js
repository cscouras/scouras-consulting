import React from 'react'
import { Link } from 'gatsby'
import MobileNav from './mobilenav'
import styles from '../styles/nav.module.css'

const ListLink = props => (
    <Link className={`${styles.link} ${styles.desktopLink}`} to={props.to}>{props.children}</Link>
)

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {show: false};
    }

    handleToggle = () => {
        this.setState({show: !this.state.show});
    }
  render() {
    return (
        <div className={styles.navLinks}>
        {this.state.show && <ListLink to="/">Home</ListLink>}
          <ListLink to="/apps/">IFP Apps</ListLink>
          <ListLink to="/mobile/">ImagineMobile</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/support/">Support</ListLink>
          <div onClick={this.handleToggle} className={styles.hamburger}>
            <span />
          </div>
          {this.state.show && <MobileNav />}
        </div>
    )
  }
}

export default Nav
