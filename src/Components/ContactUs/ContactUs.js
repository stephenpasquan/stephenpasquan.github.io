import React from 'react';
import {NavBar} from '../navbar/NavBar'

const pageInfo = {
  button: {
    status: true,
    buttonText: "Book Now",
    buttonLink: "https://book.bookingcenter.com/02/?site=COLINN"
  },
  currPage: "homepage",
};

export class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <NavBar bgImg={'GoldenGateBridge.jpg'} pageInfo={pageInfo}/>
        <h1>Contact US</h1>
      </div>
    )
  }
}
