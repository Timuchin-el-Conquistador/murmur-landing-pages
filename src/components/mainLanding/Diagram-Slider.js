import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Slider from "react-slick";
import styles from '../../assets/styles/mainLanding/main.module.css'
import "../../assets/styles/mainLanding/index.css";
import './index.css'
// imgs
import slider1 from "../../assets/images/streetiq/slider1.jpg";
import slider2 from "../../assets/images/streetiq/slider2.jpg";
import slider3 from "../../assets/images/streetiq/slider3.png";

import Analytics from '../../assets/images/mainlanding/analytics.png'

class Diagram_Slider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
    //   margin:20
    };
    return (
      <div id='custom-dots'  className="slick-slider-platform">
        <section className={styles.street_slider_cover}>
          <Slider {...settings}>
            <div className={styles.street_slider_item}>
                <Row>
                    <Col md="5" xs="12" className={styles.diagram_col}>
                        <div className={styles.tailored_left}>
                            <h4 className={styles.tailored_h4}> Lorem ipsum dolor sit amet, consectetur <a href="#">adipiscing elit. Diam.</a></h4>
                            <p className={styles.tailored_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis quisque mi faucibus cursus est.</p>
                            <a href="https://www.murmurcars.com/" className={styles.create_champ_btn}>Create Champanig 
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0084 12.1449L15.0084 4.99133L7.85486 4.99133" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4.99103 15.0087L14.9082 5.09151" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </Col>
                    <Col md="7" xs="12">
                        <div className={styles.tailored_img}>
                            <img src={ Analytics } alt="" />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className={styles.street_slider_item}>
                <Row>
                    <Col md="5" xs="12" className={styles.diagram_col}>
                        <div className={styles.tailored_left}>
                            <h4 className={styles.tailored_h4}> Lorem ipsum dolor sit amet, consectetur <a href="#">adipiscing elit. Diam.</a></h4>
                            <p className={styles.tailored_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis quisque mi faucibus cursus est.</p>
                            <a href="https://www.murmurcars.com/" className={styles.create_champ_btn}>Create Champanig 
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0084 12.1449L15.0084 4.99133L7.85486 4.99133" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4.99103 15.0087L14.9082 5.09151" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </Col>
                    <Col md="7" xs="12">
                        <div className={styles.tailored_img}>
                            <img src={ slider2 } alt="" />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className={styles.street_slider_item}>
                <Row>
                    <Col md="5" xs="12" className={styles.diagram_col}>
                        <div className={styles.tailored_left}>
                            <h4 className={styles.tailored_h4}> Lorem ipsum dolor sit amet, consectetur <a href="#">adipiscing elit. Diam.</a></h4>
                            <p className={styles.tailored_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis quisque mi faucibus cursus est.</p>
                            <a href="https://www.murmurcars.com/" className={styles.create_champ_btn}>Create Champanig 
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0084 12.1449L15.0084 4.99133L7.85486 4.99133" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4.99103 15.0087L14.9082 5.09151" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </Col>
                    <Col md="7" xs="12">
                        <div className={styles.tailored_img}>
                            <img src={ slider3 } alt="" />
                        </div>
                    </Col>
                </Row>
            </div>
          
          </Slider>
        </section>
      </div>
    );
  }
}

export default Diagram_Slider;