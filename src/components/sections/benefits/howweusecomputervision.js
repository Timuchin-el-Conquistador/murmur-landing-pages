import React from "react";
import { Container, Row, Col } from "reactstrap";

import styles from "../../../assets/css/landing-pages/mainLanding/main.module.css";

class HowWeUseComputerVision extends React.Component {
  render() {
    return (
      <Container className={styles.our_tech_contain}>
        <div className={styles.tech_other}>
          <div className={styles.tech_inner}></div>
        </div>
        <Row>
          <Col md="4" xs="12">
            <div className={styles.tech_bottom}>
              <h4>How we use computer vision?</h4>
              <p>
                Murmur’s analytics capture eyeballs and identify audiences by
                age, gender, interest, mobile device OS of choice, and their
                geo-location so that you can make more informed decisions on
                where to display your ads
              </p>
            </div>
          </Col>
          <Col md="4" xs="12">
            <div className={styles.tech_bottom}>
              <h4>Measure and target possible customers</h4>
              <p>
                Advertise on streets and create retargeting Facebook and Google
                ads dynamically through Murmur’s Omni-channel retargeting
                platform
              </p>
            </div>
          </Col>
          <Col md="4" xs="12">
            <div className={styles.tech_bottom}>
              <h4>What is the benefit of such approach?</h4>
              <p>
                It sets to deliver your ads and get more engagements, web-site
                and retails store visits, app downloads.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}



export default HowWeUseComputerVision