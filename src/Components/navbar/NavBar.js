import React from 'react';
import './NavBar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';


export class NavBar extends React.Component {
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
      <NavbarBrand href="/"><img src={require("../../Images/logo.png")} alt="The Marin Lodge"/></NavbarBrand>
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
              <NavLink className={"navLink"} href="/explore">Explore</NavLink>
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
