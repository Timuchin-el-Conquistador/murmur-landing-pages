import React, { Component } from "react";
import Slider from "react-slick";
import styles from '../../assets/styles/streetiq/streetLandingSlider.module.css';
import "../../assets/styles/streetiq/index.css";
// imgs


import ComputerVision from '../../assets/images/computer-vision.png'
import ProccessUnderhood from '../../assets/images/proccess-underhood.png'
import Analytics from '../../assets/images/analytics.png'

class System_Works_Slider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
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
                    <a href="#">
                    <img src={ComputerVision} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.street_slider_item}>
                <div className={styles.slider_item_txt}>
                    <h4>Lorem ipsum</h4>
                    <p>Our screns powered by computer vision and patented sensor technology to </p>
                </div>
                <div className={styles.slider_item_img}>
                    <a href="#">
                    <img src={ProccessUnderhood} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.street_slider_item}>
                <div className={styles.slider_item_txt}>
                    <h4>Lorem ipsum</h4>
                    <p>Our screns powered by computer vision and patented sensor technology to </p>
                </div>
                <div className={styles.slider_item_img}>
                    <a href="#">
                    <img src={Analytics} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.street_slider_item}>
                <div className={styles.slider_item_txt}>
                    <h4>Lorem ipsum</h4>
                    <p>Our screns powered by computer vision and patented sensor technology to </p>
                </div>
                <div className={styles.slider_item_img}>
                    <a href="#">
                    <img src={ComputerVision} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.street_slider_item}>
                <div className={styles.slider_item_txt}>
                    <h4>Lorem ipsum</h4>
                    <p>Our screns powered by computer vision and patented sensor technology to </p>
                </div>
                <div className={styles.slider_item_img}>
                    <a href="#">
                    <img src={ProccessUnderhood} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.street_slider_item}>
                <div className={styles.slider_item_txt}>
                    <h4>Lorem ipsum</h4>
                    <p>Our screns powered by computer vision and patented sensor technology to </p>
                </div>
                <div className={styles.slider_item_img}>
                    <a href="#">
                    <img src={Analytics} alt="" />
                    </a>
                </div>
            </div>
          </Slider>
        </section>
      </div>
    );
  }
}

export default System_Works_Slider;