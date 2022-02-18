import React, { Component } from "react";
import Slider from "react-slick";
import styles from '../../assets/styles/streetiq/streetLandingSlider.module.css';
import "../../assets/styles/landingPage/index.css";
// imgs
import slider1 from "../../assets/images/streetiq/slider1.jpg";
import slider3 from "../../assets/images/streetiq/slider3.png";

class Startup_Slider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true
    };
    return (
      <div className="slick-slider-platform">
        <section className={styles.street_slider_cover}>
          <Slider {...settings}>
            <div className={styles.street_slider_item}>
                <div className={styles.slider_item_txt}>
                    <p>1. Outdoor adversiting</p>
                </div>
                <div className={styles.slider_item_img}>
                    <a href="#">
                        <img src={slider1} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.street_slider_item}>
                <div className={styles.slider_item_txt}>
                    <p>2. İndoor Adversiting</p>
                </div>
                <div className={styles.slider_item_img}>
                    <a href="#">
                    <img src={slider3} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.street_slider_item}>
                <div className={styles.slider_item_txt}>
                    <p>3. Street adversiting</p>
                </div>
                <div className={styles.slider_item_img}>
                    <a href="#">
                    <img src={slider1} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.street_slider_item}>
                <div className={styles.slider_item_txt}>
                    <p>1. Outdoor adversiting</p>
                </div>
                <div className={styles.slider_item_img}>
                    <a href="#">
                        <img src={slider1} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.street_slider_item}>
                <div className={styles.slider_item_txt}>
                    <p>2. İndoor Adversiting</p>
                </div>
                <div className={styles.slider_item_img}>
                    <a href="#">
                    <img src={slider3} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.street_slider_item}>
                <div className={styles.slider_item_txt}>
                    <p>3. Street adversiting</p>
                </div>
                <div className={styles.slider_item_img}>
                    <a href="#">
                    <img src={slider1} alt="" />
                    </a>
                </div>
            </div>
          </Slider>
        </section>
      </div>
    );
  }
}

export default Startup_Slider;