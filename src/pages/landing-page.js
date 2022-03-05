import React from "react";
import { Container, Row, Col } from "reactstrap";
import Copyright from  "../assets/images/streetiq/copyright.svg";
import FooterLogo from  "../assets/images/streetiq/logo.svg";
import Email from  "../assets/images/streetiq/email.svg";
import Call from  "../assets/images/streetiq/call.svg";
import Location from  "../assets/images/streetiq/location.svg";
import MurmurLogo from "../assets/images/streetiq/murmur-logo.svg";
import MobileMenu from "../assets/images/mobil-menu.svg";
//sosial icons
import SosialFb from  "../assets/images/streetiq/facebook-ic.svg";
import Instagram from  "../assets/images/streetiq/instagram-ic.svg";
import Whatsapp from  "../assets/images/streetiq/whatsapp-ic.svg";
import Linkedin from  "../assets/images/streetiq/linkedin-ic.svg";
import Telegram from  "../assets/images/streetiq/telegram-ic.svg";
import MailIcon from  "../assets/images/streetiq/sms.svg";
import ProfileIcon from  "../assets/images/streetiq/profile.svg";
//utilities
import Vision_bg1 from  "../assets/images/mainlanding/vision-bg1.png";
import Vision_bg2 from  "../assets/images/mainlanding/vision-bg2.png";
import Audience from  "../assets/images/mainlanding/profile.svg";
import Proximity from  "../assets/images/mainlanding/gps.svg";
import ComputerVision from  "../assets/images/mainlanding/computer-vision.svg";
import RealTime from  "../assets/images/mainlanding/real-time-data.svg";
import Schelude from  "../assets/images/mainlanding/clock.svg";
import Loc from  "../assets/images/mainlanding/loc.svg";
import Star from  "../assets/images/mainlanding/star.svg";
import Person1 from  "../assets/images/mainlanding/person1.png";
import Person2 from  "../assets/images/mainlanding/person2.png";
import Person3 from  "../assets/images/mainlanding/person3.png";
import Demographics from "../assets/images/streetiq/demographics.svg";
import Activity from "../assets/images/streetiq/activity.svg";
import Interest from "../assets/images/streetiq/interest.svg";
import Behavior from "../assets/images/streetiq/behavior.svg";
import BenefitsBg from "../assets/images/streetiq/benefit-bg.png";
import Louis from "../assets/images/streetiq/Louis_Vuitton.svg";
import Sony from "../assets/images/streetiq/Sony.svg";
import Facebook from "../assets/images/streetiq/facebook.svg";
import Slack from "../assets/images/streetiq/slack.svg";

// css
import "../assets/styles/mainLanding/index.css";
import styles from '../assets/styles/landingPage/landing.module.css'

import Faq from "../components/landingPage/Faq";
import Case_Product_Slider from "../components/landingPage/Case-Product-Slider";
import Startup_Slider from "../components/landingPage/Startup-Slider";


import { Link } from "react-router-dom";

let async = null

class LandingPage extends React.Component {
  constructor(props) {    
    super(props)
    this.state = {
      active: false,
      slider: {
        top: true,
        middle: false,
        bottom: false,
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
      this.setState({
        active: !this.state.active
      })
  }
  switchToCLickedVerticalSlide = (active) => {
    const slider = this.state.slider;
    for (let slide in slider) {
      console.log(slide);
      if (slider[slide]) {
        
        this.setState({
          ...this.state,
          slider: {
            ...this.state.slider,
            [slide]: false,
            [active]: true,
          },
        });
      }
    }
  };
  componentDidUpdate(prevProps, prevState) {
    const slider = this.state.slider;
    for (let slide in slider) {
      if (slider[slide]) {
        console.log(prevState);
        if (!prevState.slider[slide]) {
          console.log("false");
          if (slide === "top") {
            async = setTimeout(
              () =>
                this.setState({
                  ...this.state,
                  slider: { ...this.state, top: false, middle: true },
                }),
              3000
            );
          } else if (slide === "middle") {
            async = setTimeout(
              () =>
                this.setState({
                  ...this.state,
                  slider: { ...this.state, bottom: true, middle: false },
                }),
              3000
            );
          } else {
            async = setTimeout(
              () =>
                this.setState({
                  ...this.state,
                  slider: { ...this.state, top: true, bottom: false },
                }),
              3000
            );
          }
        }
      }
    }
  }
  componentWillUnmount() {
    if (async) {
      clearTimeout(async);
    }
  }
  render() {
    const { top, middle, bottom } = this.state.slider;
    return (
      <React.Fragment>
        <header className={styles.main_header}>
            <Container className={styles.main_header_contain}>
                <div className={styles.main_header_left}>
                    <a href="#" className={styles.logo}>
                        <img src={MurmurLogo} alt=""/>
                    </a>
                </div>
                <div className= { this.state.active ? "main_header_center activeMenu" : "main_header_center"}>
                    <span><a href="#">Adversiters</a></span>
                    <span><a href="#">Drivers</a></span>
                    <span><a href="#">Blog</a></span>
                    <span><a href="#">Login</a></span>
                </div>
                <div className={styles.main_header_right}>
                    <a href="#" className={styles.header_contact}>
                        <span>Contact us</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" fill="#7356C0"/>
                            <path d="M12.0008 12.87C11.1608 12.87 10.3108 12.61 9.66076 12.08L6.53075 9.58C6.21075 9.32 6.15076 8.85 6.41076 8.53C6.67076 8.21 7.14076 8.15 7.46076 8.41L10.5908 10.91C11.3508 11.52 12.6407 11.52 13.4007 10.91L16.5308 8.41C16.8508 8.15 17.3308 8.2 17.5808 8.53C17.8408 8.85 17.7908 9.33 17.4608 9.58L14.3308 12.08C13.6908 12.61 12.8408 12.87 12.0008 12.87Z" fill="#7356C0"/>
                        </svg>
                    </a>
                    <button type="button" onClick={this.handleClick} className={styles.mobile_menu}>
                        <img src={MobileMenu} alt="" />
                    </button>
                </div>
            </Container>
          </header>
        <section className={styles.grow_sales}>
            <div className={styles.grow_content}>
                <h2>Takeover Streets, Grow Sales </h2>
                <h4>We help any businesses to target their audiences where they go. Reach local audiences and drive results more effectively Build awareness, acquire, convert, increase sales</h4>
                <div className="text-center">
                    <a href="https://www.murmurcars.com/" className={styles.create_champ_btn}>Create Champanig 
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0084 12.1449L15.0084 4.99133L7.85486 4.99133" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.99103 15.0087L14.9082 5.09151" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
        <section className={styles.street_leading_section}>
            <div className={styles.leading_tt}>We work with some of the world’s <strong>leading</strong> companies</div>
            <div className={styles.leading_items}>
                <div className={styles.leading_item}>
                <a href="https://www.murmurcars.com/">
                    <img src={Sony} alt="" />
                </a>
                </div>
                <div className={styles.leading_item}>
                <a href="https://www.murmurcars.com/">
                    <img src={Louis} alt="" />
                </a>
                </div>
                <div className={styles.leading_item}>
                <a href="https://www.murmurcars.com/">
                    <img src={Slack} alt="" />
                </a>
                </div>
                <div className={styles.leading_item}>
                <a href="https://www.murmurcars.com/">
                    <img src={Facebook} alt="" />
                </a>
                </div>
            </div>
        </section>
        <section className={styles.benefits_section}>
          <img src={BenefitsBg} alt="" className={styles.benefits_bg}/>
          <Container fluid="xl">
            <Row>
              <h2 className={styles.benefits_h2}>Benefists of local advertising via Murmur</h2>
              <div className={styles.benefits_txt}>
                we are data driven ad plaform which helps you to navigate your audiences on streets and connect with them. Find the best locations to advertise  by filtering audiences by gender, age, interest, behavior, mobile device type, activity and many more parameters.
              </div>
            </Row>
            <Row className={styles.benefits_items_cover}>
              <Col md="3" xs="12" className="col_pdng col_md_perfect">
                <div className={styles.benefits_item}>
                  <div className={styles.benefits_item_icon}>
                    <img src={Demographics} alt="" />
                  </div>
                  <h4>Demographics</h4>
                  <p>
                    Filter locations by audience gender, age, marriage status, members in a family.
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
                    Filter location by audiences activity. Identify busy days and hours.
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
                    Filter location by audiences  interest.. Learn  which places are trending in area, popular housrs and days when people visit those  venuew
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
                    Filter location by audiences househild income, expense,occupancy
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.case_products}>
            <div className={styles.case_content}>
                <h2>How  we help startups raise faster</h2>
                <div className={styles.case_txt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aenean dui, volutpat porttitor ipsum. Nulla egestas penatibus aliquam mauris.
                </div>
            </div>
            <Startup_Slider />
        </section>
        <section className={styles.main_testimonial}>
            <Container className={styles.testimonial_slider}>
                <h2 className={styles.title_h2}>How  we help startups raise faster</h2>
                <div className={styles.main_sub_txt}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aenean dui, volutpat porttitor ipsum. Nulla egestas penatibus aliquam mauris.
                </div>
            </Container>
            <Container className={styles.testimonial_slider}>
                <Row className={styles.testimonial_row}>
                    <Col md="5" xs="12" className={styles.testimonial_col}>
                    <div className={styles.testimonial_inner}>
                  <div className="testimonial_dots">
                    <ul>
                      <li className={`${top && "active"}`}>
                        <button
                          onClick={() =>
                            this.switchToCLickedVerticalSlide("top")
                          }
                          className="testimonial_dot"
                        ></button>
                      </li>
                      <li className={`${middle && "active"}`}>
                        <button
                          onClick={() =>
                            this.switchToCLickedVerticalSlide("middle")
                          }
                          className="testimonial_dot"
                        ></button>
                      </li>
                      <li className={`${bottom && "active"}`}>
                        <button
                          onClick={() =>
                            this.switchToCLickedVerticalSlide("bottom")
                          }
                          className="testimonial_dot"
                        ></button>
                      </li>
                    </ul>
                  </div>
                  <ul className={styles.testimonial_left}>
                    <li className={`${top && styles.active_li}`}>
                      <div className={styles.testimonial_left_item}>
                        <div className={styles.profil_left_img}>
                          <img src={Person1} alt="" />
                        </div>
                        <div className={styles.profil_left_txt}>
                          <p>Joe Doe</p>
                          <span>Ceo at Lorem İpsum</span>
                        </div>
                      </div>
                    </li>
                    <li className={`${middle && styles.active_li}`}>
                      <div className={styles.testimonial_left_item}>
                        <div className={styles.profil_left_img}>
                          <img src={Person2} alt="" />
                        </div>
                        <div className={styles.profil_left_txt}>
                          <p>Joe Doe</p>
                          <span>Ceo at Lorem İpsum</span>
                        </div>
                      </div>
                    </li>
                    <li className={`${bottom && styles.active_li}`}>
                      <div className={styles.testimonial_left_item}>
                        <div className={styles.profil_left_img}>
                          <img src={Person3} alt="" />
                        </div>
                        <div className={styles.profil_left_txt}>
                          <p>Joe Doe</p>
                          <span>Ceo at Lorem İpsum</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                    </Col>
                    <Col md="7" xs="12" className={styles.testimonial_col}>
                        <div className={styles.testimonial_item}>
                            <p>Et elit a parturient nec nec.</p>
                            <ul>
                                <li><img src={Star} alt="" /></li>
                                <li><img src={Star} alt="" /></li>
                                <li><img src={Star} alt="" /></li>
                                <li><img src={Star} alt="" /></li>
                                <li><img src={Star} alt="" /></li>
                            </ul>
                            <div className={styles.testimonial_txt}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget metus odio duis lorem elementum accumsan. Id accumsan nunc pellentesque varius dui potenti vestibulum purus. Bibendum a, nisi donec pharetra faucibus iaculis. Nulla nec ac neque, ullamcorper adipiscing ipsum donec. Pretium et pellentesque quis semper. Morbi accumsan, elit sed aliquet donec tristique nisi dolor arcu.
                                Praesent ut amet elit at in. Mauris sagittis, nunc id nec faucibus semper viverra nec. Nibh quam mollis arcu orci ullamcorper id suspendisse massa. Morbi facilisis interdum purus consequat. Tellus potenti nunc enim massa suspendisse aliquet. At aliquet ac cras diam. Elementum, consectetur egestas massa neque, tortor lorem.
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className={styles.murmur_utilities}>
            <h2 className={styles.title_h2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam.</h2>
            <div className={styles.main_sub_txt}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget tincidunt turpis tincidunt eros, integer vitae. Velit viverra accumsan a ut at sed est. Ut in in bibendum tellus velit purus mollis ligula vitae. Elementum.
            </div>
            <img src={Vision_bg1} alt="" className={styles.vision_bg1}/>
            <img src={Vision_bg2} alt="" className={styles.vision_bg2}/>
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
                            <p>Schelude</p>
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
        <section className={styles.case_products}>
            <div className={styles.case_content}>
                <h2>Use cases of our product</h2>
                <div className={styles.case_txt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aenean dui, volutpat porttitor ipsum. Nulla egestas penatibus aliquam mauris.
                </div>
            </div>
            <Case_Product_Slider />
        </section>
        <section className={styles.faq_section}>
          <Container className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faq_subtt}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aenean dui, volutpat porttitor ipsum. Nulla egestas penatibus aliquam mauris.
            </div>
            <div className={styles.street_faq_section}>
              <Faq open={1} className="street-faq-section">
                <Faq.Item>
                  <Faq.Header> <span className="faq_plus_icon">+</span> What is murmur?</Faq.Header>
                  <Faq.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum gravida amet vitae proin odio. Aliquet vulputate non interdum ut tempus tortor. Egestas netus nisi pellentesque in. Cras tempus amet orci, tortor phasellus imperdiet purus. Turpis sed at vitae libero orci amet libero. Ornare sed habitant sit aliquet. Ut viverra vitae ultrices sit phasellus turpis tristique eget. Aliquet non proin dis.</Faq.Body>
                </Faq.Item>
                <Faq.Item>
                  <Faq.Header><span className="faq_plus_icon">+</span> What is murmur?</Faq.Header>
                  <Faq.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum gravida amet vitae proin odio. Aliquet vulputate non interdum ut tempus tortor. Egestas netus nisi pellentesque in. Cras tempus amet orci, tortor phasellus imperdiet purus. Turpis sed at vitae libero orci amet libero. Ornare sed habitant sit aliquet. Ut viverra vitae ultrices sit phasellus turpis tristique eget. Aliquet non proin dis.</Faq.Body>
                </Faq.Item>
                <Faq.Item>
                  <Faq.Header><span className="faq_plus_icon">+</span> What is murmur?</Faq.Header>
                  <Faq.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum gravida amet vitae proin odio. Aliquet vulputate non interdum ut tempus tortor. Egestas netus nisi pellentesque in. Cras tempus amet orci, tortor phasellus imperdiet purus. Turpis sed at vitae libero orci amet libero. Ornare sed habitant sit aliquet. Ut viverra vitae ultrices sit phasellus turpis tristique eget. Aliquet non proin dis.</Faq.Body>
                </Faq.Item>
                <Faq.Item>
                  <Faq.Header><span className="faq_plus_icon">+</span> What is murmur?</Faq.Header>
                  <Faq.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum gravida amet vitae proin odio. Aliquet vulputate non interdum ut tempus tortor. Egestas netus nisi pellentesque in. Cras tempus amet orci, tortor phasellus imperdiet purus. Turpis sed at vitae libero orci amet libero. Ornare sed habitant sit aliquet. Ut viverra vitae ultrices sit phasellus turpis tristique eget. Aliquet non proin dis.</Faq.Body>
                </Faq.Item>
                <Faq.Item>
                  <Faq.Header><span className="faq_plus_icon">+</span>What is murmur?</Faq.Header>
                  <Faq.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum gravida amet vitae proin odio. Aliquet vulputate non interdum ut tempus tortor. Egestas netus nisi pellentesque in. Cras tempus amet orci, tortor phasellus imperdiet purus. Turpis sed at vitae libero orci amet libero. Ornare sed habitant sit aliquet. Ut viverra vitae ultrices sit phasellus turpis tristique eget. Aliquet non proin dis.</Faq.Body>
                </Faq.Item>
                <Faq.Item>
                  <Faq.Header><span className="faq_plus_icon">+</span> What is murmur?</Faq.Header>
                  <Faq.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum gravida amet vitae proin odio. Aliquet vulputate non interdum ut tempus tortor. Egestas netus nisi pellentesque in. Cras tempus amet orci, tortor phasellus imperdiet purus. Turpis sed at vitae libero orci amet libero. Ornare sed habitant sit aliquet. Ut viverra vitae ultrices sit phasellus turpis tristique eget. Aliquet non proin dis.</Faq.Body>
                </Faq.Item>
                <Faq.Item>
                  <Faq.Header><span className="faq_plus_icon">+</span> What is murmur?</Faq.Header>
                  <Faq.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum gravida amet vitae proin odio. Aliquet vulputate non interdum ut tempus tortor. Egestas netus nisi pellentesque in. Cras tempus amet orci, tortor phasellus imperdiet purus. Turpis sed at vitae libero orci amet libero. Ornare sed habitant sit aliquet. Ut viverra vitae ultrices sit phasellus turpis tristique eget. Aliquet non proin dis.</Faq.Body>
                </Faq.Item>
                <Faq.Item>
                  <Faq.Header><span className="faq_plus_icon">+</span> What is murmur?</Faq.Header>
                  <Faq.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum gravida amet vitae proin odio. Aliquet vulputate non interdum ut tempus tortor. Egestas netus nisi pellentesque in. Cras tempus amet orci, tortor phasellus imperdiet purus. Turpis sed at vitae libero orci amet libero. Ornare sed habitant sit aliquet. Ut viverra vitae ultrices sit phasellus turpis tristique eget. Aliquet non proin dis.</Faq.Body>
                </Faq.Item>
                <Faq.Item>
                  <Faq.Header><span className="faq_plus_icon">+</span> What is murmur?</Faq.Header>
                  <Faq.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum gravida amet vitae proin odio. Aliquet vulputate non interdum ut tempus tortor. Egestas netus nisi pellentesque in. Cras tempus amet orci, tortor phasellus imperdiet purus. Turpis sed at vitae libero orci amet libero. Ornare sed habitant sit aliquet. Ut viverra vitae ultrices sit phasellus turpis tristique eget. Aliquet non proin dis.</Faq.Body>
                </Faq.Item>
              </Faq>
            </div>
          </Container>
        </section>
        <section className={styles.contact_section}>
          <Container className={styles.contact_container}>
            <div className={styles.contact_cover}>
              <div className={styles.contact_inner}>
                <Row>
                  <Col md="6" xs="12">
                    <div className={styles.contact_left}>
                      <h4>Contact us</h4>
                      <p className={styles.contact_p}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien, mattis tristique lorem auctor. A diam quam volutpat lobortis eget.
                      </p>
                      <ul className={styles.social_icons}>
                        <li>
                          <a href="https://www.murmurcars.com/">
                            <img src={SosialFb} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.murmurcars.com/">
                            <img src={Instagram} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.murmurcars.com/">
                            <img src={Whatsapp} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.murmurcars.com/">
                            <img src={Telegram} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.murmurcars.com/">
                            <img src={Linkedin} alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md="6" xs="12">
                    <div className={styles.contact_right}>
                      <form action="">
                        <div className={styles.contact_form}>
                          <div className={styles.contact_element}> 
                            <input type="text" placeholder="Full Name" className="form-control" />
                            <img src={MailIcon} alt="" />
                          </div>
                          <div className={styles.contact_element}>
                            <input type="email" placeholder="Your mail" className="form-control" />
                            <img src={ProfileIcon} alt="" />
                          </div>
                          <button type="submit" className={styles.contact_btn}>Contact us</button>
                        </div>
                      </form>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </section>
        <footer className={styles.street_footer}>
            <Container>
                <Row className={styles.street_footer_top}>
                    <Col xs="12" md="3" className="footer_item">
                        <a href="https://www.murmurcars.com/">
                        <img src={FooterLogo} alt="" />
                        </a>
                        <p className={styles.ft_left_p}>Helping founders to promote their growd funding campaigns</p>
                        <ul className={styles.footer_social}>
                        <li>
                            <a href="https://www.murmurcars.com/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16.19C22 19.83 19.83 22 16.19 22H15C14.45 22 14 21.55 14 21V15.23C14 14.96 14.22 14.73 14.49 14.73L16.25 14.7C16.39 14.69 16.51 14.59 16.54 14.45L16.89 12.54C16.92 12.36 16.78 12.19 16.59 12.19L14.46 12.22C14.18 12.22 13.96 12 13.95 11.73L13.91 9.28C13.91 9.12 14.04 8.98001 14.21 8.98001L16.61 8.94C16.78 8.94 16.91 8.81001 16.91 8.64001L16.87 6.23999C16.87 6.06999 16.74 5.94 16.57 5.94L13.87 5.98001C12.21 6.01001 10.89 7.37 10.92 9.03L10.97 11.78C10.98 12.06 10.76 12.28 10.48 12.29L9.28 12.31C9.11 12.31 8.98001 12.44 8.98001 12.61L9.01001 14.51C9.01001 14.68 9.14 14.81 9.31 14.81L10.51 14.79C10.79 14.79 11.01 15.01 11.02 15.28L11.11 20.98C11.12 21.54 10.67 22 10.11 22H7.81C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81V16.19Z" fill="#8F9BB3"/>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.murmurcars.com/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#8F9BB3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="#8F9BB3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M17.6361 7H17.6477" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.murmurcars.com/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.99916 22.7502C1.79916 22.7502 1.60913 22.6702 1.46913 22.5302C1.27913 22.3402 1.19918 22.0602 1.26918 21.8002L2.52919 17.0902C1.68919 15.5302 1.24916 13.7702 1.24916 11.9902C1.24916 6.06023 6.06916 1.24023 11.9992 1.24023C17.9292 1.24023 22.7492 6.06023 22.7492 11.9902C22.7492 17.9202 17.9292 22.7402 11.9992 22.7402C10.1892 22.7402 8.41919 22.2902 6.83919 21.4302L2.19917 22.7202C2.12917 22.7402 2.06916 22.7502 1.99916 22.7502ZM6.93916 19.8802C7.06916 19.8802 7.19917 19.9203 7.31917 19.9803C8.72917 20.8103 10.3492 21.2502 11.9992 21.2502C17.0992 21.2502 21.2492 17.1002 21.2492 12.0002C21.2492 6.90024 17.0992 2.75024 11.9992 2.75024C6.89916 2.75024 2.74916 6.90024 2.74916 12.0002C2.74916 13.6302 3.17915 15.2202 3.98915 16.6202C4.08915 16.7902 4.11917 17.0002 4.06917 17.1902L3.06917 20.9302L6.74916 19.9102C6.80916 19.8902 6.87916 19.8802 6.93916 19.8802Z" fill="#8F9BB3"/>
                                <path d="M14.7402 17.7598C14.1202 17.7598 13.4802 17.6198 12.8102 17.3298C12.1802 17.0598 11.5502 16.6998 10.9402 16.2498C10.3402 15.8098 9.75027 15.3098 9.21027 14.7698C8.67027 14.2198 8.17022 13.6398 7.73022 13.0398C7.28022 12.4098 6.92022 11.7898 6.66022 11.1798C6.38022 10.5198 6.24023 9.8698 6.24023 9.2498C6.24023 8.8098 6.32021 8.3898 6.47021 7.9998C6.63021 7.5898 6.89022 7.21979 7.23022 6.89979C7.87022 6.26979 8.79026 6.03981 9.52026 6.38981C9.77026 6.49981 9.98026 6.67981 10.1403 6.91981L11.3002 8.54979C11.4202 8.70979 11.5103 8.87979 11.5803 9.04979C11.6603 9.24979 11.7103 9.44981 11.7103 9.63981C11.7103 9.89981 11.6402 10.1598 11.5002 10.3898C11.4102 10.5398 11.2802 10.7198 11.1102 10.8898L10.9802 11.0298C11.0402 11.1098 11.1102 11.2098 11.2202 11.3298C11.4302 11.5698 11.6602 11.8298 11.9102 12.0798C12.1602 12.3198 12.4102 12.5598 12.6602 12.7698C12.7802 12.8698 12.8803 12.9498 12.9603 12.9998L13.1002 12.8598C13.2802 12.6798 13.4603 12.5398 13.6403 12.4498C13.9703 12.2398 14.4802 12.1898 14.9302 12.3798C15.0902 12.4398 15.2502 12.5298 15.4202 12.6498L17.0903 13.8298C17.3203 13.9898 17.5002 14.2098 17.6202 14.4598C17.7202 14.7098 17.7603 14.9298 17.7603 15.1598C17.7603 15.4598 17.6902 15.7498 17.5602 16.0298C17.4302 16.2898 17.2802 16.5198 17.1002 16.7298C16.7802 17.0798 16.4103 17.3398 16.0103 17.5098C15.6103 17.6798 15.1802 17.7598 14.7402 17.7598ZM8.79022 7.73979C8.73022 7.73979 8.53027 7.73979 8.28027 7.98979C8.09027 8.16979 7.96024 8.35981 7.87024 8.56981C7.78024 8.77981 7.74023 9.01981 7.74023 9.25981C7.74023 9.67981 7.84022 10.1298 8.04022 10.6098C8.25022 11.1098 8.56025 11.6398 8.94025 12.1698C9.33025 12.6998 9.77025 13.2298 10.2603 13.7198C10.7503 14.1998 11.2702 14.6498 11.8102 15.0498C12.3302 15.4298 12.8603 15.7298 13.3903 15.9598C14.1503 16.2898 14.8502 16.3698 15.4202 16.1298C15.6202 16.0498 15.8002 15.9098 15.9802 15.7298C16.0702 15.6298 16.1403 15.5298 16.2003 15.3998C16.2303 15.3298 16.2502 15.2498 16.2502 15.1798C16.2502 15.1598 16.2502 15.1298 16.2202 15.0698L14.5502 13.9098C14.4802 13.8598 14.4102 13.8198 14.3502 13.7998C14.3102 13.8198 14.2503 13.8498 14.1403 13.9598L13.7603 14.3398C13.4703 14.6298 13.0103 14.7098 12.6403 14.5798L12.4603 14.4998C12.2303 14.3798 11.9702 14.1998 11.6802 13.9498C11.4002 13.7098 11.1303 13.4598 10.8403 13.1798C10.5603 12.8898 10.3103 12.6198 10.0703 12.3398C9.81025 12.0298 9.63025 11.7798 9.51025 11.5698L9.40027 11.3098C9.37027 11.2098 9.36023 11.0998 9.36023 10.9998C9.36023 10.7198 9.46027 10.4698 9.65027 10.2698L10.0303 9.8798C10.1403 9.7698 10.1803 9.70981 10.2003 9.66981C10.1703 9.59981 10.1303 9.5398 10.0803 9.4698L8.91022 7.81981L8.79022 7.73979Z" fill="#8F9BB3"/>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.murmurcars.com/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9941 2C10.0163 2 8.08293 2.58649 6.43844 3.6853C4.79395 4.78412 3.51223 6.3459 2.75535 8.17317C1.99847 10.0004 1.80044 12.0111 2.18629 13.9509C2.57214 15.8907 3.52455 17.6725 4.92308 19.0711C6.3216 20.4696 8.10343 21.422 10.0432 21.8079C11.9831 22.1937 13.9937 21.9957 15.821 21.2388C17.6482 20.4819 19.21 19.2002 20.3088 17.5557C21.4077 15.9112 21.9941 13.9778 21.9941 12C21.9943 10.6868 21.7357 9.38634 21.2332 8.17304C20.7307 6.95973 19.9941 5.8573 19.0655 4.92869C18.1368 4.00008 17.0344 3.26349 15.8211 2.76098C14.6078 2.25847 13.3074 1.99989 11.9941 2ZM15.1737 17.1525C15.1362 17.2458 15.0793 17.33 15.0066 17.3996C14.934 17.4691 14.8473 17.5223 14.7524 17.5556C14.6575 17.5889 14.5566 17.6015 14.4565 17.5926C14.3563 17.5837 14.2592 17.5535 14.1717 17.504L11.457 15.3946L9.71466 17.002C9.67424 17.0319 9.62695 17.0511 9.57714 17.0579C9.52734 17.0647 9.47662 17.0589 9.42967 17.0409L9.76366 14.0525L9.77436 14.061L9.78118 14.002C9.78118 14.002 14.6662 9.55445 14.8652 9.36496C15.0667 9.17596 15.0002 9.13496 15.0002 9.13496C15.0117 8.90443 14.6387 9.13496 14.6387 9.13496L8.16614 13.299L5.47066 12.381C5.47066 12.381 5.05666 12.2325 5.01766 11.906C4.97666 11.582 5.48415 11.406 5.48415 11.406L16.2011 7.14849C16.2011 7.14849 17.0821 6.75597 17.0821 7.406L15.1737 17.1525Z" fill="#8F9BB3"/>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.murmurcars.com/">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.25 0C18.3197 0 20 1.68038 20 3.75V16.25C20 18.3196 18.3196 20 16.25 20H3.75C1.68038 20 0 18.3196 0 16.25V3.75C0 1.68038 1.68025 0 3.75 0H16.25ZM2.964 17.0427H5.933V7.498H2.964V17.0427ZM17.0432 17.0427V11.8081C17.0432 9.2375 16.4882 7.26075 13.4854 7.26075C12.042 7.26075 11.0736 8.0525 10.6781 8.803H10.6375V7.498H7.7935V17.0427H10.7564V12.322C10.7564 11.0764 10.992 9.87025 12.5359 9.87025C14.0581 9.87025 14.0776 11.2942 14.0776 12.4009V17.0427H17.0432ZM4.449 6.1935C5.39787 6.1935 6.1685 5.4235 6.1685 4.4735C6.1685 3.524 5.39787 2.75337 4.449 2.75337C3.49625 2.75337 2.72788 3.524 2.72788 4.4735C2.72788 5.4235 3.49625 6.1935 4.449 6.1935Z" fill="#8F9BB3"/>
                            </svg>
                            </a>
                        </li>
                        </ul>
                    </Col>
                    <Col xs="12" md="2" className="footer_item">
                        <p className={styles.footer_tt}>For Founders</p>
                        <ul className={styles.footer_nav}>
                        <li><a href="https://www.murmurcars.com/">Investor DB</a></li>
                        <li><a href="https://www.murmurcars.com/">Community</a></li>
                        <li><a href="https://www.murmurcars.com/">Founder Tools</a></li>
                        <li><a href="https://www.murmurcars.com/">Startup Checklist</a></li>
                        <li><a href="https://www.murmurcars.com/">Privacy Policy</a></li>
                        </ul>
                    </Col>
                    <Col xs="12" md="2" className="footer_item">
                        <p className={styles.footer_tt}>Fundraising</p>
                        <ul className={styles.footer_nav}>
                        <li><a href="https://www.murmurcars.com/">How to Raise?</a></li>
                        <li><a href="https://www.murmurcars.com/">Learn</a></li>
                        <li><a href="https://www.murmurcars.com/">Why Murmur?</a></li>
                        </ul>
                    </Col>
                    <Col xs="12" md="2" className="footer_item">
                        <p className={styles.footer_tt}>Company</p>
                        <ul className={styles.footer_nav}>
                        <li><a href="https://www.murmurcars.com/">About</a></li>
                        <li><a href="https://www.murmurcars.com/">Events</a></li>
                        <li><a href="https://www.murmurcars.com/">We’re hiring!</a></li>
                        </ul>
                    </Col>
                    <Col xs="12" md="3" className="footer_item">
                        <p className={styles.footer_tt}>Reach us</p>
                        <ul className={styles.footer_contact}>
                        <li>
                            <img src={Location} alt="" />
                            <span>1440 W Taylor st, Chicago, IL 60607 </span>
                        </li>
                        <li>
                            <img src={Email} alt="" />
                            <a href="mailto:info@murmurcars.com">info@murmurcars.com</a>
                        </li>
                        <li>
                            <img src={Call} alt="" />
                            <a href="tel:+1 (847) 350-8685">+1 (847) 350-8685</a>
                        </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container className="container-fluid footer-fluid">
                <Row className={styles.street_footer_center}>
                    <Col md="12" xs="12">
                        <div className={styles.create_champing}>
                            <span>Create Champaing now!</span>
                            <a href="https://www.murmurcars.com/" className={styles.create_champ_btn}>Create Champanig 
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0084 12.1449L15.0084 4.99133L7.85486 4.99133" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4.99103 15.0087L14.9082 5.09151" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </Col>
                </Row>
                <div className={styles.footer_custom_contain}>
                    <Row className={styles.street_footer_bottom}>
                        <Col md="6" xs="12">
                            <p className={styles.copyright}><img src={Copyright} alt="" /><span>2022, Murmurcars INC</span></p>
                        </Col>
                        <Col md="6" xs="12" className="text-right">
                            <a href="https://www.murmurcars.com/" className={styles.terms}>Privacy Policy, Terms</a>
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>
        <div>
        <Link to='/destination' style={{marginRight:'3rem'}}>Destination</Link>
        <Link to='/streetLanding'  style={{marginRight:'3rem'}}>StreetLanding</Link>
        <Link to='/SurveyRewards'  style={{marginRight:'3rem'}}>SurveyRewards</Link>
        <Link to='/landingPage'  style={{marginRight:'3rem'}}>Landing</Link>
        <Link to='/'  style={{marginRight:'3rem'}}>Main</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default LandingPage;
