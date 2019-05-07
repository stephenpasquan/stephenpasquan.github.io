import React from 'react';
import { PhotoNav } from '../PhotoNav/PhotoNav';
import './AboutUs.css';

export class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <PhotoNav bgImg={'GoldenGateBridge.jpg'}/>
       <div className="aboutUsContainer">
        <div className="headerContainer">
          <h1 className="header">Location</h1>
        </div>
        <div className="textContainer">
          <p className="text">With our central location, you are just minutes from wine country, San Francisco, and many local landmarks</p>
        </div>

        <div className="headerContainer">
          <h1 className="header">Value</h1>
        </div>
        <div className="textContainer">
          <p className="text">At the Marin Lodge we believe in hotel quality with motel prices. You'll find that for the price, there is no better value</p>
        </div>

        <div className="headerContainer">
          <h1 className="header">Satisfaction</h1>
        </div>
        <div className="textContainer">
          <p className="text">
          Being a family owned company for over 60 years, we have learned that hospitality and guest satisfaction is our highest priority
          </p>
        </div>

        <div className="headerContainer">
          <h1 className="header">Rooms And Amenities</h1>
        </div>
        <div className="textContainer">
          <p className="text">
          We are a non-smoking hotel with several different room  layouts, so whether you are traveling with the family or for business we have a room for you
          </p>
        </div>
        <div className="headerContainer">
          <h1 className="amenitiesHeading">Amenities Include:</h1>
        </div>
        <div className="textContainer">
          <ul className="amenitiesList">
            <li className="amenity">Free Wifi</li>
            <li className="amenity">Cable Television With HBO</li>
            <li className="amenity">Complementary Parking</li>
            <li className="amenity">Refrigerator, Microwave, and Wolfgang Puck Coffee In Every Room</li>
            <li className="amenity">All Non-Smoking Rooms</li>
            <li className="amenity">Free Starbucks Coffee and Baked Goods In The Morning</li>
          </ul>
        </div>
       </div>
      </div>
    )
  }
}
