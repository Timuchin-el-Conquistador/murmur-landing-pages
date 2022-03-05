import React, { Component } from "react";
import Slider from "react-slick";
import styles from '../../assets/styles/streetiq/streetLandingSlider.module.css';
import "../../assets/styles/streetiq/index.css";
// imgs
import LightsInNight from '../../assets/images/night-lights-car.png'
import NuarHouse from '../../assets/images/nuar-house.png'
import GreenAndCozy from '../../assets/images/green-and-cozy.png'

class Success_Stories_Slider extends Component {
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
                <a href="#">
                  <img src={GreenAndCozy} alt="" />
                </a>
              </div>
            </div>
            <div className={styles.street_slider_item}>
              <div className={styles.slider_item_img}>
                <a href="#">
                  <img src={LightsInNight} alt="" />
                </a>
              </div>
            </div>
            <div className={styles.street_slider_item}>
              <div className={styles.slider_item_img}>
                <a href="#">
                  <img src={NuarHouse} alt="" />
                </a>
              </div>
            </div>
            <div className={styles.street_slider_item}>
              <div className={styles.slider_item_img}>
                <a href="#">
                  <img src={GreenAndCozy} alt="" />
                </a>
              </div>
            </div>
            <div className={styles.street_slider_item}>
              <div className={styles.slider_item_img}>
                <a href="#">
                  <img src={LightsInNight} alt="" />
                </a>
              </div>
            </div>
            <div className={styles.street_slider_item}>
              <div className={styles.slider_item_img}>
                <a href="#">
                  <img src={NuarHouse} alt="" />
                </a>
              </div>
            </div>
          </Slider>
        </section>
      </div>
    );
  }
}

export default Success_Stories_Slider;