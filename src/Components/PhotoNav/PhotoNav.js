import React from 'react';
import './PhotoNav.css';
import {NavBar} from '../NavBar/NavBar';
import {PhotoCarousel} from '../PhotoCarousel/PhotoCarousel';

export class PhotoNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <div  className={"NavBar"}>
          <NavBar />
        </div>
        <PhotoCarousel className={"bg-img"} />
      </div>
    )
  }
}
