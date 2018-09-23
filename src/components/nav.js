import React from 'react'
import { Link } from 'gatsby'
import MobileNav from './mobilenav'
import styles from '../styles/nav.module.css'

const ListLink = props => (
  <li className={styles.navItem}>
    <Link to={props.to}>{props.children}</Link>
  </li>
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
        <ul className={styles.navLinks}>
        {this.state.show && <ListLink to="/">Home</ListLink>}
          <ListLink to="/apps/">IFP Apps</ListLink>
          <ListLink to="/mobile/">ImagineMobile</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/support/">Support</ListLink>
          <div onClick={this.handleToggle} className={styles.hamburger}>
            <span />
          </div>
          {this.state.show && <MobileNav />}
        </ul>
    )
  }
}

export default Nav
