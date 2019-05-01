import React from 'react';
import './PhotoNav.css';
import {NavBar} from '../NavBar/NavBar'

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
      <div className={"bg-img"} style={{backgroundImage: 'url(' + require(`../../Images/${this.props.bgImg}`) + ')'}}>
         <NavBar />
      </div>
    )
  }
}
