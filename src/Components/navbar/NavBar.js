import React from 'react';
import './NavBar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


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
      <div>
        <div className={"bgImgDesktop"} style={{backgroundImage: 'url(' + require(`../../Images/${this.props.bgImg}`) + ')'}}>
          <div className={"desktopNavContainer"}>
            <ul className={"desktopNavBar"}>
              <li>
              <NavLink href="/" className={"navItem"}>Home</NavLink>
              </li>
              <li>
                <NavLink exact to="/contactus" className={"navItem"}>Contact Us</NavLink>
              </li>
              <li>
                <NavLink exact to="/aboutus" className={"navItem"}>About Us</NavLink>
              </li>
              <li>
                <NavLink exact to="/localguide" className={"navItem"}>Local Guide</NavLink>
              </li>
              <li className={"navItem"}>
                <a id={"bookNowButton"} href={"/home"}>Book Now</a>
              </li>
            </ul>
          </div>
          <div className={"buttonContainer"}>
          <a className={"button"} href={"/home"}>Book Now</a>
          </div>
        </div>
        <div className={"bg-img"} style={{backgroundImage: 'url(' + require(`../../Images/${this.props.bgImg}`) + ')'}}>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/aboutus">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contactus">Contact Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/localguide">Local Guide</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/photos">Photo Gallery</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    )
  }
}
