import React from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom';


export class NavBar extends React.Component {

  render() {

    console.log(this.props)
    const button = this.props.pageInfo.button;
    const currPage = this.props.pageInfo.currPage;

    return (
      <div className={"bg-img"} style={{backgroundImage: 'url(' + require(`../../Images/${this.props.bgImg}`) + ')'}}>
        <div className={"nav-container"}>
          <ul className={"topnav"}>
            <li>
            <NavLink exact to="/" className={"navItem"}>Home</NavLink>
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
              <a id={"book-button"} href={button.buttonLink}>Book Now</a>
            </li>
          </ul>
        </div>
        <div className={"button-container"}>
        <a className={"button"} href={button.buttonLink}>{button.buttonText}</a>
        </div>
      </div>
    )
  }
}
