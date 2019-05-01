import React from 'react';
import { PhotoNav } from '../PhotoNav/PhotoNav';

export class LocalGuide extends React.Component {
  render() {
    return (
      <div>
        <PhotoNav bgImg={'GoldenGateBridge.jpg'}/>
        <h1>Local Guide</h1>
      </div>
    )
  }
}
