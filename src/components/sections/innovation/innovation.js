
import React from "react";
import { Container, Row, Col } from "reactstrap";

import styles from "../../../assets/css/landing-pages/mainLanding/main.module.css";
import Audience from "../../../assets/images/landing-page/mainlanding/profile.svg";
import Proximity from "../../../assets/images/landing-page/mainlanding/gps.svg";
import Vision_bg1 from "../../../assets/images/landing-page/mainlanding/vision-bg1.png";
import Vision_bg2 from "../../../assets/images/landing-page/mainlanding/vision-bg2.png";
import ComputerVision from "../../../assets/images/landing-page/mainlanding/computer-vision.svg";
import RealTime from "../../../assets/images/landing-page/mainlanding/real-time-data.svg";
import Schelude from "../../../assets/images/landing-page/mainlanding/clock.svg";
import Loc from "../../../assets/images/landing-page/mainlanding/loc.svg";

class Innovation extends React.Component{
    render(){
        return(
            <section className={styles.murmur_utilities}>
            <h2 className={styles.title_h2}>Murmur Means Innovation</h2>
            <div className={styles.main_sub_txt}>
              Explore the interests of your audience on streets via real-time
              street-level data and connect with them by using smart digital
              car-top billboards, collect data in exchange of rewards and
              discounts and retarget them via retargeting online Ads dynamically.
            </div>
            <img src={Vision_bg1} alt="" className={styles.vision_bg1} />
            <img src={Vision_bg2} alt="" className={styles.vision_bg2} />
            <Container className={styles.utilites_row}>
              <Row>
                <Col md="4" xs="6" className={styles.utilites_item}>
                  <div className={styles.utilites_each}>
                    <img src={Audience} alt="" />
                    <p>Audience</p>
                  </div>
                </Col>
                <Col md="4" xs="6" className={styles.utilites_item}>
                  <div className={styles.utilites_each}>
                    <img src={Schelude} alt="" />
                    <p>Schedule</p>
                  </div>
                </Col>
                <Col md="4" xs="6" className={styles.utilites_item}>
                  <div className={styles.utilites_each}>
                    <img src={ComputerVision} alt="" />
                    <p>Computer Vision</p>
                  </div>
                </Col>
                <Col md="4" xs="6" className={styles.utilites_item}>
                  <div className={styles.utilites_each}>
                    <img src={Loc} alt="" />
                    <p>Location</p>
                  </div>
                </Col>
                <Col md="4" xs="6" className={styles.utilites_item}>
                  <div className={styles.utilites_each}>
                    <img src={RealTime} alt="" />
                    <p>Real time Data</p>
                  </div>
                </Col>
                <Col md="4" xs="6" className={styles.utilites_item}>
                  <div className={styles.utilites_each}>
                    <img src={Proximity} alt="" />
                    <p>Impact</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        )
    }
}


export default Innovation