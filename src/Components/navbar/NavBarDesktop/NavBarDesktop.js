import React from 'react';
import './NavBarDesktop.css';
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


export class NavBarDesktop extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
  <div>
    <Navbar color="faded" light expand="md">
      <NavbarBrand href="/">LOGO</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className={"navLink"} href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={"navLink"} href="/aboutus">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={"navLink"} href="/contactus">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={"navLink"} href="/localguide">Local Guide</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={"navLink"} id={"booknow-desktop"} href="https://book.bookingcenter.com/02/?site=COLINN">Book Now</NavLink>
            </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
    )
  }
}
