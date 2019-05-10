import React from 'react';
import { PhotoNav } from '../PhotoNav/PhotoNav';
import {map} from '../../Images/Map.png';
import './Explore.css';

export class Explore extends React.Component {
  render() {
    return (
      <div>
        <PhotoNav bgImg={'GoldenGateBridge.jpg'}/>
        <div className={"content"}>

          <div className={"image"}>
            <img className={"map"} src={require('../../Images/Map.png')} alt="Map Of Surrounding Area"/>
          </div>

          <div className={"text"}>
            <h1>Explore</h1>

            <p className={"blurb"}>Famous for its beautiful scenery, its unique character and historically significant landmarks, San Francisco and the surrounding areas are one of the most extraordinary places to explore in America. Whether you are a history lover and want to explore the historical landmarks, a person who revels in the character of a city and want to see the unique character of San Francisco or if you just love witnessing the natural beauty of the coast, with our central location you are minutes from all kinds of Shopping, Activites, and Excursions. </p>

            <div className={"shoppingContainer"}>
            <h2 className={"headers"}>Shopping</h2>
            <ul className={"listContainer"}>
              <li className={"listItem"}>Northgate Mall</li>
              <li className={"listItem"}>Village Shopping Center</li>
              <li className={"listItem"}>Corte Madera Town Center</li>
            </ul>
            </div>

            <div className={"activitiesContainer"}>
            <h2 className={"headers"}>Activities</h2>
            <ul className={"listContainer"}>
              <li className={"listItem"}>Local Organic Farmers Markets</li>
              <li className={"listItem"}>Hiking</li>
              <li className={"listItem"}>Mountain Biking</li>
              <li className={"listItem"}>Lake & Ocean Boating </li>
              <li className={"listItem"}>Sight Seeing</li>
            </ul>
            </div>

            <div className={"excursionsContainer"}>
            <h2 className={"headers"}>Excursions</h2>
            <ul className={"listContainer"}>
              <li className={"listItem"}>Wine Tasting In Napa & Sonoma</li>
              <li className={"listItem"}>Mission San Rafael Archangel</li>
              <li className={"listItem"}>China Camp</li>
              <li className={"listItem"}>Marin Civic Center</li>
              <li className={"listItem"}>Muir Woods</li>
              <li className={"listItem"}>The Golden Gate Bridge</li>
              <li className={"listItem"}>Alcatraz</li>
              <li className={"listItem"}>Fishermans Wharf</li>
              <li className={"listItem"}>Muir Woods</li>
              <li className={"listItem"}>San Francisco</li>
              <li className={"listItem"}>Local Beaches</li>
            </ul>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
