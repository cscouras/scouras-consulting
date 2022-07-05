import React from 'react'
import { Link } from 'gatsby'
import MobileNav from './mobilenav'
import {link, desktopLink, hamburger, navLinks} from '../styles/nav.module.css'

const ListLink = props => (
    <Link className={`${link} ${desktopLink}`} to={props.to}>{props.children}</Link>
)

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {show: false};
    }

    handleKeyPress = (e) => {
      if(e.keyCode === 13){
        this.handleToggle();
      }
    }

    handleToggle = () => {
        this.setState({show: !this.state.show});
    }
  render() {
    return (
        <div className={navLinks}>
          <ListLink to="/apps/">IFP Apps</ListLink>
          <ListLink to="/mobile/">ImagineMobile</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/support/">Support</ListLink>
          <div onClick={this.handleToggle} className={hamburger} role="button" aria-label="Toggle Navigation" tabIndex="0"  onKeyDown={this.handleKeyPress}>
            <span />
          </div>
          {this.state.show && <MobileNav />}
        </div>
    )
  }
}

export default Nav
