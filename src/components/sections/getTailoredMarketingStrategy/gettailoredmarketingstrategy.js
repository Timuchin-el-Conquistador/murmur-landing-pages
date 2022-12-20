import React from "react";

import styles from "../../../assets/styles/mainLanding/main.module.css";
import StrategyBg1 from "../../../assets/images/mainlanding/strategy-bg1.png";
import StrategyBg2 from "../../../assets/images/mainlanding/strategy-bg2.png";





class GetTailoredMarketingStrategy extends React.Component{
    render(){
        const {emailToSend} = this.props
        return(
            <section className={styles.get_tailored}>
            <img src={StrategyBg1} alt="" className={styles.str1_bg} />
            <img src={StrategyBg2} alt="" className={styles.str2_bg} />
            <h2>Get Tailored Marketting Strategy</h2>
            <div className={styles.main_tailored_txt}>
              Our clients receive a full-package marketing strategy for further
              development
            </div>
            <div className={styles.tailored_email_block}>
              <div className={styles.email_block}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your mail"
                  onChange={(event) => emailToSend(event, "email")}
                />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                    stroke="#2E3A59"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                    stroke="#2E3A59"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <button
                type="submit"
                className={styles.tailored_btn}
                onClick={this.handleSubmit}
              >
                Send me
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.42565 17.2253C7.26732 17.2253 7.10898 17.1669 6.98398 17.0419C6.74232 16.8003 6.74232 16.4003 6.98398 16.1586L12.4173 10.7253C12.8173 10.3253 12.8173 9.67526 12.4173 9.27526L6.98398 3.84193C6.74232 3.60026 6.74232 3.20026 6.98398 2.95859C7.22565 2.71693 7.62565 2.71693 7.86732 2.95859L13.3007 8.39193C13.7256 8.81693 13.9673 9.39193 13.9673 10.0003C13.9673 10.6086 13.734 11.1836 13.3007 11.6086L7.86732 17.0419C7.74232 17.1586 7.58398 17.2253 7.42565 17.2253Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            {/*<Container className={styles.tailored_contain}>
              <Row>
                <Col md="5" xs="12">
                  <div className={styles.tailored_left}>
                    <h4 className={styles.tailored_h4}>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur{" "}
                      <a href="#">adipiscing elit. Diam.</a>
                    </h4>
                    <p className={styles.tailored_p}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis
                      quisque mi faucibus cursus est.
                    </p>
                    <a
                      href="https://www.murmurcars.com/"
                      className={styles.create_champ_btn}
                    >
                      Create Champanig
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
                  <div className={styles.tailored_img}>
                    <img src={Analytics} alt="" />
                  </div>
                </Col>
              </Row>
                    </Container>*/}
          </section>
        )
    }
}


export default GetTailoredMarketingStrategy