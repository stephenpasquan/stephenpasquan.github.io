import React from 'react';
import { PhotoNav } from '../PhotoNav/PhotoNav';
import './ContactUs.css'

export class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <PhotoNav bgImg={'GoldenGateBridge.jpg'}/>
        <div className="contactContainer">
          <div className="phoneContainer">
            <h1 className="contactHeader">Call Us</h1>
            <h2 className="phoneNumber">Toll Free:&nbsp;
              <a className="phoneNumberLink" href="tel:1-855-344-749">1-855-344-7496</a>
            </h2>
            <h2 className="phoneNumber">Local:&nbsp;
              <a className="phoneNumberLink" href="tel:4155782827">415-578-2827</a>
            </h2>
            <h3 className="contactTimes">8:00AM &mdash; 8:00PM</h3>
          </div>
          <div className="addressContainer">
            <h1 className="contactHeader">Location</h1>
            <h2 className="address">1735 Lincoln Ave</h2>
            <h2 className="address">San Rafael, CA 94901</h2>
          </div>
        </div>
        <div className="emailContainer">
          <h1 className="contactEmail">
            <a className="contactEmailLink" href="mailto:info@marinlodge.com">Send an Email</a>
          </h1>
        </div>
      </div>
    )
  }
}
