import React, { Component } from "react";
import Slider from "react-slick";
import styles from '../../assets/styles/streetiq/streetLandingSlider.module.css';
import "../../assets/styles/streetiq/index.css";
// imgs

import LightsInNight from '../../assets/images/night-lights-car.png'
import NuarHouse from '../../assets/images/nuar-house.png'
import GreenAndCozy from '../../assets/images/green-and-cozy.png'

class Research_slider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
    };
    return (
      <div className="slick-slider-platform">
        <section className={styles.street_slider_cover}>
          <Slider {...settings}>
            <div className={styles.street_slider_item}>
              <div className={styles.slider_item_img}>
                <img src={GreenAndCozy} alt="" />
              </div>
            </div>
            <div className={styles.street_slider_item}>
              <div className={styles.slider_item_img}>
                <img src={LightsInNight} alt="" />
              </div>
            </div>
            <div className={styles.street_slider_item}>
              <div className={styles.slider_item_img}>
                <img src={NuarHouse} alt="" />
              </div>
            </div>
            <div className={styles.street_slider_item}>
              <div className={styles.slider_item_img}>
                <img src={GreenAndCozy} alt="" />
              </div>
            </div>
            <div className={styles.street_slider_item}>
              <div className={styles.slider_item_img}>
                <img src={LightsInNight} alt="" />
              </div>
            </div>
            <div className={styles.street_slider_item}>
              <div className={styles.slider_item_img}>
                <img src={NuarHouse} alt="" />
              </div>
            </div>
          </Slider>
        </section>
      </div>
    );
  }
}

export default Research_slider;