import React from 'react';
import './NavBar.css';


export class NavBar extends React.Component {
  render() {
    console.log(`url(${this.props.bgImg})`);
    return (
      <div className="bg-img" style={{ backgroundImage: `url(./Nature.jpg)`}}>
        <div className="container">
          <ul className="topnav">
            <li>Home</li>
            <li>Reservations</li>
            <li>Photo Gallery</li>
            <li>Specials</li>
            <li>Directions</li>
            <li>Local Guide</li>
          </ul>
        </div>
      </div>
    )
  }
}
