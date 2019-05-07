import React from 'react';
import './HomePage.css';
import { PhotoNav } from '../PhotoNav/PhotoNav';

// MAKE SURE TO CREDIT ICON8!!!!!!!!!!! (icons8.com)
export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <PhotoNav bgImg={'GoldenGateBridge.jpg'} />
        <div className={"flex-container"}>
          <div className={"column-div"}>
            <img src={require("../../Images/Wifi.png")} alt="wifi" className={"icon-image"}/>
            <h1 className={"home-amenities"}>Free Wifi</h1>
          </div>
          <div className={"column-div"}>
            <img src={require("../../Images/Tv.png")} alt="TV"  className={"icon-image"}/>
            <h1 className={"home-amenities"}>Complementary Cable TV and HBO In Every Room</h1>
          </div>
          <div className={"column-div"}>
            <img src={require("../../Images/Parking.png")} alt="Parking" className={"icon-image"}/>
            <h1 className={"home-amenities"}>Complementary Parking</h1>
          </div>
        </div>
        <footer>
          <a id={"icon8-ref"} href="https://icons8.com">Icons by Icons8</a>
          </footer>
      </div>
    );
  }
}
