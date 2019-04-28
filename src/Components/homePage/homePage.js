import React from 'react';
import {NavBar} from '../navbar/NavBar';
import './homePage.css';
// MAKE SURE TO CREDIT ICON8!!!!!!!!!!! (icons8.com)
export class HomePage extends React.Component {
  render() {
    return (
      <div className="body">
        <NavBar bgImg={'GoldenGateBridge.jpg'}/>
        <div className="flex-container">
          <div id="c1">
            <img src={require("../../Images/Wifi.png")} alt="wifi" />
            <h1>Free Wifi</h1>
          </div>
          <div id="c2">
            <img src={require("../../Images/Tv.png")} alt="TV" />
            <h1>Complementary Satellite TV and HBO In Every Room</h1>
          </div>
          <div id="c3">
            <img src={require("../../Images/Parking.png")} alt="Parking" />
            <h1>Complementary Parking</h1>
          </div>
        </div>
      </div>
    );
  }
}
