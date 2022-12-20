import React from "react";
import { Container, Row, Col } from "reactstrap";

import styles from "../../../assets/css/landing-pages/streetiq/index.module.css";

import NumberBg from "../../../assets/images/landing-page/streetiq/number-bg.png";

class UsingMurmur extends React.Component {
  render() {

    const {openContactsModal} = this.props
    return (
        <section className={styles.number_locations}>
        <img src={NumberBg} alt="" className={styles.number_bg_img} />
        <Container fluid="xl">
          <Row>
            <Col md="5" xs="12">
              <div className={styles.number_left}>
                <span className={styles.number_left_span}>
                  Our results speak for us
                </span>
                <h5 className={styles.number_left_h5}>
                  Using Murmur means building trust, brand awareness, achieve
                  higher sales, revenue and displaying highly personalized ads
                  to your audience at any given time of day or location at the
                  click of a few buttons.
                </h5>
                <a
                       onClick={openContactsModal}
                  className={styles.create_champ_btn}
                >
                  Create Campaign
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0084 12.1449L15.0084 4.99133L7.85486 4.99133"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.99103 15.0087L14.9082 5.09151"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </Col>
            <Col md="7" xs="12">
              <div className={styles.number_right}>
                <ul className={styles.number_right_ul}>
                  <li>
                    <div className={styles.number_right_item}>
                      <h6>30000</h6>
                      <div className={styles.number_item_info}>
                        <p>Number of locations reached </p>
                        <span>Advertise across country</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.number_right_item}>
                      <h6>3500</h6>
                      <div className={styles.number_item_info}>
                        <p>Number of Screens</p>
                        <span>Present your ad in the biggest cities</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.number_right_item}>
                      <h6>150M</h6>
                      <div className={styles.number_item_info}>
                        <p>Monthly views of the screens</p>
                        <span>
                          MURMUR's screens receive 150M views per month
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.number_right_item}>
                      <h6>35T</h6>
                      <div className={styles.number_item_info}>
                        <p>Monthly generated data</p>
                        <span>
                          We are offering services of collecting, enriching
                          data that helps you easily understand the
                          preferences of the possible customers and correctly
                          build up your advertising campaigns
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default UsingMurmur;
