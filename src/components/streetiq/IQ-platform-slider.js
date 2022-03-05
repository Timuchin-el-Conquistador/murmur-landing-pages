import React, { Component } from "react";
import Slider from "react-slick";
import styles from '../../assets/styles/streetiq/streetLandingSlider.module.css';
import "../../assets/styles/streetiq/index.css";
// imgs

import AbTesting from '../../assets/images/ab-testing.png'
import AbTestingCreate from '../../assets/images/ab-testing-create.png'
import AbTestingReport from '../../assets/images/ab-testing-report.png'

class IQ_platform_slider extends Component {
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
              <div className={styles.slider_item_txt}>
                <h4>Lorem ipsum</h4>
                <p>Our screns powered by computer vision and patented sensor technology to </p>
              </div>
              <div className={styles.slider_item_img}>
                <img src={AbTesting} alt="" />
              </div>
            </div>
            <div className={styles.street_slider_item}>
              <div className={styles.slider_item_txt}>
                <h4>Lorem ipsum</h4>
                <p>Our screns powered by computer vision and patented sensor technology to </p>
              </div>
              <div className={styles.slider_item_img}>
                <img src={AbTestingCreate} alt="" />
              </div>
            </div>
            <div className={styles.street_slider_item}>
              <div className={styles.slider_item_txt}>
                <h4>Lorem ipsum</h4>
                <p>Our screns powered by computer vision and patented sensor technology to </p>
              </div>
              <div className={styles.slider_item_img}>
                <img src={AbTestingReport} alt="" />
              </div>
            </div>
            <div className={styles.street_slider_item}>
              <div className={styles.slider_item_txt}>
                <h4>Lorem ipsum</h4>
                <p>Our screns powered by computer vision and patented sensor technology to </p>
              </div>
              <div className={styles.slider_item_img}>
                <img src={AbTesting} alt="" />
              </div>
            </div>
            <div className={styles.street_slider_item}>
              <div className={styles.slider_item_txt}>
                <h4>Lorem ipsum</h4>
                <p>Our screns powered by computer vision and patented sensor technology to </p>
              </div>
              <div className={styles.slider_item_img}>
                <img src={AbTestingCreate} alt="" />
              </div>
            </div>
            <div className={styles.street_slider_item}>
              <div className={styles.slider_item_txt}>
                <h4>Lorem ipsum</h4>
                <p>Our screns powered by computer vision and patented sensor technology to </p>
              </div>
              <div className={styles.slider_item_img}>
                <img src={AbTestingReport} alt="" />
              </div>
            </div>
          </Slider>
        </section>
      </div>
    );
  }
}

export default IQ_platform_slider;