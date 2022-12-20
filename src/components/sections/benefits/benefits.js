import React from "react";
import { Container, Row, Col } from "reactstrap";

import styles from "../../../assets/css/landing-pages/mainLanding/main.module.css";
import People from "../../../assets/images/landing-page/mainlanding/people.svg";
import Behavior from "../../../assets/images/landing-page/mainlanding/behavior.svg";
import Age from "../../../assets/images/landing-page/mainlanding/age.svg";
import ArtificialIntelligence from "../../../assets/images/landing-page/mainlanding/artificial-intelligence.svg";
import Cycle from "../../../assets/images/landing-page/mainlanding/cycle.svg";
import GpsTech from "../../../assets/images/landing-page/mainlanding/gps-tech.svg";
import techbg1 from "../../../assets/images/landing-page/mainlanding/tech-bg1.png";
import techbg2 from "../../../assets/images/landing-page/mainlanding/tech-bg2.png";

import HowWeUseComputerVision from "./howweusecomputervision";

class Benefits extends React.Component {
  constructor() {
    super();
    this.assets = [
      GpsTech,
      People,
      Behavior,
      Age,
      ArtificialIntelligence,
      Cycle,
    ];
  }
  render() {
    const { showShades, showComputerVisionPart, content } = this.props;
    const {assets} = this
    
    return (
      <section className={styles.our_tech_cover}>
        <h2 className={styles.title_h2}>Benefits of our technology</h2>

        {showShades && (
          <>
            <img src={techbg1} alt="" className={styles.tech_bg1} />
            <img src={techbg2} alt="" className={styles.tech_bg2} />
          </>
        )}
        <Container className={styles.our_tech_contain}>
          <Row>
            {content.map((el, i) => (
              <Col md="4" xs="12" key={i}>
                <div className={styles.our_tech_item}>
                  <div className={styles.our_tech_img}>
                  <img src={assets[i]} alt="" />
                  </div>
                  <p>{el.header}</p>
                  <div className={styles.our_tech_txt}>{el.paragraph}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        {showComputerVisionPart && <HowWeUseComputerVision />}
      </section>
    );
  }
}

export default Benefits;
