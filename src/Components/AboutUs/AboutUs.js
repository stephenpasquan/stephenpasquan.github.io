import React from 'react';
import { PhotoNav } from '../PhotoNav/PhotoNav';

export class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <PhotoNav bgImg={'GoldenGateBridge.jpg'}/>
       <div className="aboutUsContainer">
        <h1 className="aboutUsHeader">Welcome To The Marin Lodge</h1>
        <p className="aboutUsText">Welcome to Marin Lodge where you receive hotel comfort at motel prices, all within 12 miles of San Francisco, and just 21 miles south of Wine Country. You will find us immediately North of San Rafael Town Center and only minutes from Napa County Wine Country, Muir Woods National Park, Point Reyes National Park and Seashore, Sonoma Raceway and the Marin Civic Center. We offer all the amenities that will make your stay a comfortable one. You'll find our central location to be perfect for day trips to explore the best of what the San Francisco Bay Area offers. We have been committed to quality, service and value for more than 59 years.
        </p>
        <ul className="amenitiesList">Amenities
          <li className="amenity">Cable/Satellite Television</li>
        </ul>
       </div>
      </div>
    )
  }
}
