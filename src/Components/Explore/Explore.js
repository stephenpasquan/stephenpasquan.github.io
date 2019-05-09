import React from 'react';
import { PhotoNav } from '../PhotoNav/PhotoNav';
import './Explore.css';

export class Explore extends React.Component {
  render() {
    return (
      <div>
        <PhotoNav bgImg={'GoldenGateBridge.jpg'}/>
        <h1>Local Guide</h1>
      </div>
    )
  }
}
