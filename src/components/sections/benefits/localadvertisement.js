
import React from "react";
import { Container, Row, Col } from "reactstrap";

import styles from "../../../assets/css/landing-pages/streetiq/index.module.css";

import Demographics from "../../../assets/images/landing-page/streetiq/demographics.svg";
import Activity from "../../../assets/images/landing-page/streetiq/activity.svg";
import Interest from "../../../assets/images/landing-page/streetiq/interest.svg";
import Behavior from "../../../assets/images/landing-page/streetiq/behavior.svg";
import BenefitsBg from "../../../assets/images/landing-page/streetiq/benefit-bg.png";





class BenefitsOfLocalAvertisement extends React.Component {
  render() {
    return (
      <section className={styles.benefits_section}>
        <img src={BenefitsBg} alt="" className={styles.benefits_bg} />
        <Container fluid="xl">
          <h2 className={styles.benefits_h2}>
            Benefits of local advertising via Murmur
          </h2>
          <div className={styles.benefits_txt}>
            Murmur is the data driven OOH advertising platform that provides
            services of street navigating and connecting possible customers to
            their consuming needs. By using our services you will find the best
            locations for your ad via filtering audiences by gender, age,
            interest, behavior, mobile device type, activity and many more
            parameters.
          </div>

          <Row className={styles.benefits_items_cover}>
            <Col md="3" xs="12" className="col_pdng col_md_perfect">
              <div className={styles.benefits_item}>
                <div className={styles.benefits_item_icon}>
                  <img src={Demographics} alt="" />
                </div>
                <h4>Demographics</h4>
                <p>
                  Filter locations by gender, age, marital status of the
                  audience.
                </p>
              </div>
            </Col>
            <Col md="3" xs="12" className="col_pdng col_md_perfect">
              <div className={styles.benefits_item}>
                <div className={styles.benefits_item_icon}>
                  <img src={Activity} alt="" />
                </div>
                <h4>Activity</h4>
                <p>
                  Filter location by activity of the audience. Identify busy
                  days and hours.
                </p>
              </div>
            </Col>
            <Col md="3" xs="12" className="col_pdng col_md_perfect">
              <div className={styles.benefits_item}>
                <div className={styles.benefits_item_icon}>
                  <img src={Interest} alt="" />
                </div>
                <h4>Interest</h4>
                <p>
                  Filter location by audience’s interest. Learn which places are
                  trending in the area, identify the popular hours and days when
                  people visit those venues
                </p>
              </div>
            </Col>
            <Col md="3" xs="12" className="col_pdng col_md_perfect">
              <div className={styles.benefits_item}>
                <div className={styles.benefits_item_icon}>
                  <img src={Behavior} alt="" />
                </div>
                <h4>Behavior</h4>
                <p>
                  Filter location by audience’s household income, expense,
                  occupation
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}



export default BenefitsOfLocalAvertisement