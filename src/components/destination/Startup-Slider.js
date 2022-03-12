import React, { Component } from "react";
import Slider from "react-slick";
import styles from '../../assets/styles/streetiq/streetLandingSlider.module.css';
import "../../assets/styles/landingPage/index.css";
// imgs
import Objective from "../../assets/images/objective.png";
import Details from "../../assets/images/details.png";
import Audience from "../../assets/images/audience.png";
import Budget from "../../assets/images/budget.png";
import Placement from "../../assets/images/placement.png";
import Media from "../../assets/images/media.png";
import Verify from "../../assets/images/verify.png";


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
                    <p>1. Choose Campaing Objective</p>
                </div>
                <div className={styles.slider_item_img}>
                    <a href="#">
                        <img src={Objective} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.street_slider_item}>
                <div className={styles.slider_item_txt}>
                    <p>2. Enter Details</p>
                </div>
                <div className={styles.slider_item_img}>
                    <a href="#">
                    <img src={Details} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.street_slider_item}>
                <div className={styles.slider_item_txt}>
                    <p>3.  Choose Audience</p>
                </div>
                <div className={styles.slider_item_img}>
                    <a href="#">
                        <img src={Audience} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.street_slider_item}>
                <div className={styles.slider_item_txt}>
                    <p>4. Choose budget</p>
                </div>
                <div className={styles.slider_item_img}>
                    <a href="#">
                    <img src={Budget} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.street_slider_item}>
                <div className={styles.slider_item_txt}>
                    <p>4. Placement </p>
                </div>
                <div className={styles.slider_item_img}>
                    <a href="#">
                        <img src={Placement} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.street_slider_item}>
                <div className={styles.slider_item_txt}>
                    <p>5. Upload image</p>
                </div>
                <div className={styles.slider_item_img}>
                    <a href="#">
                    <img src={Media} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.street_slider_item}>
                <div className={styles.slider_item_txt}>
                    <p>6. Verify your inputs </p>
                </div>
                <div className={styles.slider_item_img}>
                    <a href="#">
                    <img src={Verify} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.street_slider_item}>
                <div className={styles.slider_item_txt}>
                <p>1. Choose Campaing Objective</p>
                </div>
                <div className={styles.slider_item_img}>
                    <a href="#">
                        <img src={Objective} alt="" />
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