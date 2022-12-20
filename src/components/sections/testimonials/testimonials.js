
import React from "react";
import { Container, Row, Col } from "reactstrap";

import styles from "../../../assets/css/landing-pages/mainLanding/main.module.css";
import Star from "../../../assets/images/landing-page/mainlanding/star.svg";

class Testimonials extends React.Component{

    render(){
        const {slide, switchToCLickedVerticalSlide} = this.props
        return(
            <section className={styles.main_testimonial}>
            <h2 className={styles.title_h2}>Testimonials</h2>
            <div className={styles.main_sub_txt}>
              What customers think about our services
            </div>
            <Container className={styles.testimonial_slider}>
              <Row className={styles.testimonial_row}>
                <Col md="5" xs="12" className={styles.testimonial_col}>
                  <div className={styles.testimonial_inner}>
                    <div className="testimonial_dots">
                      <ul>
                        <li className={`${slide === "testimonial1" && "active"}`}>
                          <button
                            onClick={() =>
                              switchToCLickedVerticalSlide("testimonial1")
                            }
                            className="testimonial_dot"
                          ></button>
                        </li>
                        <li className={`${slide === "testimonial2" && "active"}`}>
                          <button
                            onClick={() =>
                              switchToCLickedVerticalSlide("testimonial2")
                            }
                            className="testimonial_dot"
                          ></button>
                        </li>
                        <li className={`${slide === "testimonial3" && "active"}`}>
                          <button
                            onClick={() =>
                              switchToCLickedVerticalSlide("testimonial3")
                            }
                            className="testimonial_dot"
                          ></button>
                        </li>
                      </ul>
                    </div>
                    <ul className={styles.testimonial_left}>
                      <li
                        className={`${
                          slide === "testimonial1" && styles.active_li
                        }`}
                      >
                        <div className={styles.testimonial_left_item}>
                          <div className={styles.profil_left_img}>
                            <a>
                              <span>
                                <img
                                  src="https://www.westernsouthern.com/-/media/2c071b3b8a5d4f83b249428e32f35d30.jpg"
                                  alt=""
                                />
                              </span>
                            </a>
                          </div>
                          <div className={styles.profil_left_txt}>
                            <p>Ruslan Khalilov</p>
                            <span>Life Insurance Agent</span>
                          </div>
                        </div>
                      </li>
                      <li
                        className={`${
                          slide === "testimonial2" && styles.active_li
                        }`}
                      >
                        <div className={styles.testimonial_left_item}>
                          <div className={styles.profil_left_img}>
                            <a>
                              <span>
                                <img
                                  src="https://pbs.twimg.com/profile_images/1359681847853211650/MpHxGxv8_400x400.jpg"
                                  alt=""
                                />
                              </span>
                            </a>
                          </div>
                          <div className={styles.profil_left_txt}>
                            <p>Yana Aliyev</p>
                            <span>Real Estate Agent</span>
                          </div>
                        </div>
                      </li>
                      <li
                        className={`${
                          slide === "testimonial3" && styles.active_li
                        }`}
                      >
                        <div className={styles.testimonial_left_item}>
                          <div className={styles.profil_left_img}>
                            <a>
                              <span>
                                <img
                                  src="data:image/jpeg;base64,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"
                                  alt=""
                                />
                              </span>
                            </a>
                          </div>
                          <div className={styles.profil_left_txt}>
                            <p>Ali Gasimov</p>
                            <span>Owner of Oromo Cafe</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="7" xs="12" className={styles.testimonial_col}>
                  <div className={styles.testimonial_item}>
                    {slide === "testimonial1" && (
                      <p>
                        Murmur is innovative way to advertise and target people
                        where it really matters.
                      </p>
                    )}
                    {slide === "testimonial2" && (
                      <p>
                        Murmur is better & more affordable than other billboards.
                      </p>
                    )}
                    {slide === "testimonial3" && (
                      <p> Murmur helped to increase my business awareness.</p>
                    )}
                    <ul>
                      <li>
                        <img src={Star} alt="" />
                      </li>
                      <li>
                        <img src={Star} alt="" />
                      </li>
                      <li>
                        <img src={Star} alt="" />
                      </li>
                      <li>
                        <img src={Star} alt="" />
                      </li>
                      <li>
                        <img src={Star} alt="" />
                      </li>
                    </ul>
                    {slide === "testimonial1" && (
                      <div className={styles.testimonial_txt}>
                        Murmur is innovative way to advertise and target people
                        where it really matters. I used Facebook, Google Ads and
                        did not get more sales. With Murmur sales went up and now
                        i am famous in my city and everyone is calling to me.
                        Thank you Murmur for helping me to grow my small business.
                      </div>
                    )}
                    {slide === "testimonial2" && (
                      <div className={styles.testimonial_txt}>
                        Murmur is better & more affordable than other billboards.
                        After having my ad on cars i started seeing traffic to my
                        website and receiving phone calls. Murmur helped me to get
                        customer faster, because they already saw my ads in
                        neighborhood. Absolutely love Murmur advertising and see
                        sales growth. Also my clients love to see my listings on
                        Murmur displays.
                      </div>
                    )}
                    {slide === "testimonial3" && (
                      <div className={styles.testimonial_txt}>
                        Murmur helped to increase my business awareness and more
                        people learn about Oromo. We saw increase in traffic to
                        the shop and sales. Murmur is the best advertising
                        solution for me.
                      </div>
                    )}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        )
    }
}


export default Testimonials