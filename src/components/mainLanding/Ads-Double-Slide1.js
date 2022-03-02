import React, { Component } from "react";
import Slider from "react-slick";
import styles from '../../assets/styles/streetiq/streetLandingSlider.module.css';
import "../../assets/styles/streetiq/index.css";
import './index.css'

import mainstyles from '../../assets/styles/mainLanding/main.module.css';
// imgs
import slider1 from "../../assets/images/streetiq/slider1.jpg";
import slider3 from "../../assets/images/streetiq/slider3.png";

class Ads_Double_Slide1 extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div id='custom-dots' className="slick-slider-platform adsdb-platform">
        <section className={styles.street_slider_cover}>
          <Slider {...settings} className={mainstyles.adsdb_slider_cover}>
            <div className={mainstyles.street_slider_item}>
              <div className={mainstyles.slider_item_img}>
                <img src={slider1} alt="" />
              </div>
            </div>
            <div className={mainstyles.street_slider_item}>
              <div className={mainstyles.slider_item_img}>
                <img src={slider3} alt="" />
              </div>
            </div>
            <div className={mainstyles.street_slider_item}>
              <div className={mainstyles.slider_item_img}>
                <img src={slider1} alt="" />
              </div>
            </div>
          </Slider>
        </section>
      </div>
    );
  }
}

export default Ads_Double_Slide1;