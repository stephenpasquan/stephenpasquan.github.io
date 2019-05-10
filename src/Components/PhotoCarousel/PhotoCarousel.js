import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import './PhotoCarousel.css';

const items = [
  {
    src: require('../../Images/exterior-1.jpg'),
    altText: 'Exterior 1',
    caption: 'Exterior'
  },
  {
    src: require('../../Images/exterior-2.jpg'),
    altText: 'Exterior 2',
    caption: 'Exterior'
  },
  {
    src: require('../../Images/room-1.jpg'),
    altText: 'Room 1',
    caption: 'Room'
  },
  {
    src: require('../../Images/room-2.jpg'),
    altText: 'Room 2',
    caption: 'Room'
  },
  {
    src: require('../../Images/room-3.jpg'),
    altText: 'Room 3',
    caption: 'Room'
  },
  {
    src: require('../../Images/room-4.jpg'),
    altText: 'Room 4',
    caption: 'Room'
  },
  {
    src: require('../../Images/room-5.jpg'),
    altText: 'Room 5',
    caption: 'Room'
  }
];

export class PhotoCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}
