import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import Abtesting from '../../assets/images/streetiq/abtesting.svg'
import AbtestingNew from '../../assets/images/streetiq/new-abtesting.svg'
import AbTestingReport from '../../assets/images/streetiq/abtesting-report.svg'

import classes from '../../assets/styles/streetiq/index.module.css'

const items = [
  {
    text: "Lorem ipsum",
    paragraph: "Our screns powered by computer vision and patented sensor technology to ",
    img:Abtesting,
    id: "1",
  },
  {
    text: "Lorem ipsum",
    paragraph: "Our screns powered by computer vision and patented sensor technology to ",
    img:AbtestingNew,
    id: "2",
  },
  {
    text: "Lorem ipsum",
    paragraph: "Our screns powered by computer vision and patented sensor technology to ",
    img:AbTestingReport,
    id: "3",
  },
];

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };

    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => (
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={item.id}
      >
        <div >
          <h4 className={classes.header}>{item.text}</h4>
          <p className={classes.paragraph}>{item.paragraph}</p>
          <img src={item.img} />
        </div>
      </CarouselItem>
    ));

    return (
      <div>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          controls={false}
          autoPlay={false}
        >
          {slides}
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
            className={classes.carusel_buttons}
          />
        </Carousel>
      </div>
    );
  }
}

export default Slider;
