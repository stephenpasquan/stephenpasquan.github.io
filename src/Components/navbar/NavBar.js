import React from 'react';
import './NavBar.css';
import {NavBarDesktop} from './NavBarDesktop/NavBarDesktop';
import {NavBarMobile} from './NavBarMobile/NavBarMobile'

export class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div className={"bg-img"} style={{backgroundImage: 'url(' + require(`../../Images/${this.props.bgImg}`) + ')'}}>
         <NavBarDesktop />
         <NavBarMobile />
      </div>
    )
  }
}
