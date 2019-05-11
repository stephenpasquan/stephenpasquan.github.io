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
          <p className="text">
              Fall in love with the best of Marin County. With our central location, we are just minutes away from downtown San Francisco, wine country, and all
              of the beauty and adventure the Bay Area has to offer.
             </p>
        </div>

        <div className="headerContainer">
          <h1 className="header">Value</h1>
        </div>
        <div className="textContainer">
          <p className="text">At the Marin Lodge we believe in high quality at affordable prices.</p>
        </div>

        <div className="headerContainer">
          <h1 className="header">Satisfaction</h1>
        </div>
        <div className="textContainer">
          <p className="text">
              The Marin Lodge has been family owned and operated for over 60 years. Our highest priority is ensuring your satisfaction. We can't wait to
              welcome you to Marin!
          </p>
        </div>

        <div className="headerContainer">
          <h1 className="header">Rooms And Amenities</h1>
        </div>
        <div className="textContainer">
          <p className="text">
              Whether you are traveling with family or visiting on business, we have a room for you! Our amenities include:
          </p>
        </div>
        <div className="textContainer">
          <ul className="amenitiesList">
            <li className="amenity">Free WiFi</li>
            <li className="amenity">Cable television with HBO</li>
            <li className="amenity">Complimentary parking</li>
            <li className="amenity">Refrigerator, microwave, and Wolfgang Puck coffee in every room</li>
            <li className="amenity">All non-smoking rooms</li>
            <li className="amenity">Free Starbucks coffee & baked goods each morning</li>
          </ul>
        </div>
       </div>
      </div>
    )
  }
}
