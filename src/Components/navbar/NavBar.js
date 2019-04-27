import React from 'react';
import './NavBar.css';


export class NavBar extends React.Component {

  render() {
    return (
      <div className="bg-img" style={{backgroundImage: 'url(' + require(`../../Images/${this.props.bgImg}`) + ')'}}>
        <div className="container">
          <ul className="topnav">
            <li>Home</li>
            <li>Reservations</li>
            <li>Photo Gallery</li>
            <li>Specials</li>
            <li>Directions</li>
            <li>Local Guide</li>
            <li>Contact Us</li>
            <li id="book-button">Book Now</li>
          </ul>
        </div>
      </div>
    )
  }
}
