import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
//import axios from "axios";

import PG from "../../assets/images/hypeIQ/P&G.svg";
import Nestle from "../../assets/images/hypeIQ/Nestle.svg";
import Kapital from "../../assets/images/hypeIQ/Kapital.svg";
import Sirab from "../../assets/images/hypeIQ/Sirab.svg";
// css
import "../../assets/styles/mainLanding/index.css";
import styles from "../../assets/styles/surveys/index.module.scss";

//import ContactUsModal from "../../layouts/HeroLayouts/HeroLayoutsTypeTenth/Header/contactUsModal";
//import { SlackWebHook } from "../../api";

import Footer from "../../components/sections/footer/footer";
import Header from "../../components/sections/header";
import GetTailoredMarketingStrategy from "../../components/sections/getTailoredMarketingStrategy/gettailoredmarketingstrategy";
import HowWeHelpBrands from "../../components/sections/howWeHelpBrands/HowWeHelpBrands2";

class Surveys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      contact: {
        fullName: null,
        email: null,
        company: null,
        phone: null,
        message: null,
        companywebsite: null,
      },
      viewport: {
        width: window.innerWidth,
      },
      contactModal: false,
    };
    this.handleClick = this.handleClick.bind(this);

    this.content = [
      {
        header: "Quick application process:",
        paragraph:
          "The clients can fill out a 1-page application form within 5-6 minutes",
      },
      {
        header: "Attracting more potential clients to the brand:",
        paragraph:
          "After receiving the form, Hype IQ team starts o work on building a buzz strategy for the clients",
      },
      {
        header: "Creating a live hype around the product:",
        paragraph:
          "Via Hype IQ, our clients will be able to see how everyone in their area about their brand in no time",
      },
      {
        header: "Building strong awareness around the brand:",
        paragraph:
          "Via Hype IQ, your brand will be introduced to the public as accurately as possible",
      },
      {
        header: "Your brand will stand out:",
        paragraph:
          "In the ever-changing world market, Hype IQ will make your brand’s representation authentic from others",
      },
      {
        header: "Setting up a strong social media presence:",
        paragraph:
          "Via Hype IQ, a strong social media presence will be prepared for the clients",
      },
    ];
  }
  handleClick() {
    this.setState({
      active: !this.state.active,
    });
  }
  openContactUsModal = () => {
    this.setState({
      ...this.state,
      contactModal: true,
    });
  };
  switchToCLickedVerticalSlide = (slide) => {
    this.setState({
      ...this.state,
      slider: {
        slide,
      },
    });
  };

  updateSize = () => {
    const currentWidth = window.innerWidth;

    this.setState({
      ...this.state,
      viewport: {
        width: currentWidth,
      },
    });
  };

  componentWillUnmount() {
    document.body.classList.remove("bg-transparent");
    document.body.classList.add("default");
    window.removeEventListener("resize", this.updateSize);
  }
  componentDidMount() {
    document.body.classList.remove("default");
    document.body.classList.add("bg-transparent");
    window.addEventListener("resize", this.updateSize);
  }
  handleSubmit = () => {
    const { fullName, email, company, phone, message, companywebsite } =
      this.state.contact;
    /*axios
      .post(
        SlackWebHook,
        { fullName, email, company, phone, message, companywebsite },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              " GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },
        }
      )
      .then((res) => {
        window.location.reload();
        // passDataToParent(true);
      })
      .catch((err) => {
        //window.location.reload();
        // passDataToParent(true);
      });*/
  };
  emailToSend = (e, type) => {
    const value = e.target.value;

    this.setState({
      ...this.state,
      contact: { ...this.state.contact, [type]: value },
    });
  };
  render() {
    const { viewport } = this.state;
    const { width } = viewport;
    return (
      <div className={styles.brand_healph_cont}>
        <Header />
        <main>
          <Container>
            <header className={styles.background}>
              <div className={styles.foreground}>
                <div className={styles.text}>
                  <h1>Smarter Tools. Better Marketing Decisions.</h1>
                  <p>
                    only brand tracking tool that provides accurate consumer
                    insight and opinionss
                  </p>
                </div>
                <div className={styles.image} />
              </div>
            </header>
            <section className={styles.survey_app}>
              <h2>Advanced Technology To Fit Your Brand Tracking Needs</h2>
              <p>
                The best platform to measure brand awareness, Brand loyalty,
                Brand association
              </p>
              <Row>
                <Col className={styles.app_info}>
                  <h3>Customizable insights</h3>
                  <p>
                    Potter ipsum wand elf parchment wingardium. Dirt tell steak
                    niffler red ground bagman through answer. Flame ‘zis potion
                    owl are eye transfiguration devil’s mcgonagall. To minerva
                    troll cores raw-steak nick our. You-know-who come would lion
                    frisbees. Turban
                  </p>
                </Col>
                <Col className={styles.app_preview} />
              </Row>
              <Row>
                <Col className={styles.app_preview} />
                <Col className={styles.app_info}>
                  <h3>Easy access to data</h3>
                  <p>
                    Potter ipsum wand elf parchment wingardium. Dirt tell steak
                    niffler red ground bagman through answer. Flame ‘zis potion
                    owl are eye transfiguration devil’s mcgonagall. To minerva
                    troll cores raw-steak nick our. You-know-who come would lion
                    frisbees. Turban
                  </p>
                </Col>
              </Row>
            </section>
            <section className={styles.survey_mobile}>
              <h2>Why Survey for Marketing search</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                tincidunt turpis tincidunt eros, integer vitae. Velit viverra
                accumsan a ut at sed est. Ut in in bibendum tellus velit purus
                mollis ligula vitae. Elementum.
              </p>
              <Row className={styles.follow_steps}>
                <Col>
                  <div className={styles.screen} />
                  <div>
                    <h3>Receive survey on app</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Scelerisque tempor
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className={styles.screen} />
                  <div>
                    <h3>Answer questions directly</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Scelerisque tempor
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className={styles.screen} />
                  <div>
                    <h3>Answer questions directly</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Scelerisque tempor
                    </p>
                  </div>
                </Col>
              </Row>
            </section>
            <section className={styles.brand_awarness_sec}>
              <h2>Understand How Consumers Think and Feel About Your Brand</h2>
              <Row className={styles.brand_awarness_row}>
                <Col>
                  <div className={styles.brand_healph} />
                  <div>
                    <strong>56%</strong>
                    <p>of general population in US are aware of your brand</p>
                  </div>
                </Col>
                <Col>
                  <h3>How users feels</h3>
                  <p>
                    Potter ipsum wand elf parchment wingardium. Dirt tell steak
                    niffler red ground bagman through answer. Flame ‘zis potion
                    owl are eye transfiguration devil’s mcgonagall. To minerva
                    troll cores raw-steak nick our. You-know-who come would lion
                    frisbees. Turban
                  </p>
                </Col>
              </Row>
            </section>
            <HowWeHelpBrands />
            <section className={`${styles.survey_app} ${styles.customer_app}`}>
              <Row>
                <Col className={styles.app_info}>
                  <h3>Measure Brand Awareness</h3>
                  <p>
                    Measure brand awareness and understand how your marketing
                    campaigns are impacting your target audience.
                  </p>
                </Col>
                <Col className={styles.app_preview} />
              </Row>
              <Row>
                <Col className={styles.app_preview} />
                <Col className={styles.app_info}>
                  <h3>See How Your Campaigns Increase Brand Awareness</h3>
                  <p>
                    Track specific campaigns over time to prove campaign impact.
                    Add competitor tracking to monitor the performance of
                    competing brands.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className={styles.app_info}>
                  <h3>How we use computer vision? </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Scelerisque tempor cursus ultricies placerat. Elit mi.
                  </p>
                </Col>
                <Col className={styles.app_preview} />
              </Row>
            </section>
            <section
              className={`${styles.categories_section} ${styles.marginBTN_zero}`}
            >
              <div className={styles.contact_cover}>
                <div className={styles.contact_inner}>
                  <Row>
                    <Col md="12" xs="12">
                      <div className={styles.contact_left}>
                        <h3> Better undestand your Audience</h3>
                        <p className={styles.contact_p}>
                          {" "}
                          Sit nisi in donec amet cursus. Lectus nunc eget urna
                          velit gravida ultricies. Eu viverra ac risus molestie.
                          Sed leo condimentum amet ipsum placerat commodo metus.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className={styles.dashboard} />
            </section>
            <section
              className={`${styles.categories_section} ${styles.ai_section}  ${styles.marginBTN_zero}`}
            >
              <div className={styles.dashboard} />
              <div className={styles.contact_cover}>
                <div className={styles.contact_inner}>
                  <Row>
                    <Col md="12" xs="12">
                      <div className={styles.contact_left}>
                        <h3> Better undestand your Audience</h3>
                        <p className={styles.contact_p}>
                          {" "}
                          Sit nisi in donec amet cursus. Lectus nunc eget urna
                          velit gravida ultricies. Eu viverra ac risus molestie.
                          Sed leo condimentum amet ipsum placerat commodo metus.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </section>
            <section
              className={`${styles.categories_section} ${styles.marginBTN_zero}`}
            >
              <div className={styles.contact_cover}>
                <div className={styles.contact_inner}>
                  <Row>
                    <Col md="12" xs="12">
                      <div className={styles.contact_left}>
                        <h3> Better undestand your Audience</h3>
                        <p className={styles.contact_p}>
                          {" "}
                          Sit nisi in donec amet cursus. Lectus nunc eget urna
                          velit gravida ultricies. Eu viverra ac risus molestie.
                          Sed leo condimentum amet ipsum placerat commodo metus.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className={styles.categories} />
                <div className={styles.categories} />
                <div className={styles.categories} />
              </div>
            </section>

            <section>
              <div className={styles.brands}>
                <h2>List of our customers</h2>
                <ul>
                  <li>
                    <img src={PG} alt="brands" />
                  </li>
                  <li>
                    <img src={Nestle} alt="brands" />
                  </li>
                  <li>
                    <img src={Kapital} alt="brands" />
                  </li>
                  <li>
                    <img src={Sirab} alt="brands" />
                  </li>
                </ul>
              </div>
            </section>
            <GetTailoredMarketingStrategy />
            <section
              className={`${styles.contact_section} ${styles.marginBTN_zero}`}
            >
              <div className={styles.contact_cover}>
                <div className={styles.contact_inner}>
                  <Row>
                    <Col md="12" xs="12">
                      <div className={styles.contact_left}>
                        <h4> Create Survey</h4>
                        <p className={styles.contact_p}>
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Morbi aenean dui, volutpat porttitor ipsum.
                          Nulla egestas penatibus aliquam mauris.
                        </p>
                        <a
                          onClick={this.openContactUsModal}
                          className={styles.create_champ_btn}
                        >
                          Create Survey
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0084 12.1449L15.0084 4.99133L7.85486 4.99133"
                              stroke="#7356C0"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.99103 15.0087L14.9082 5.09151"
                              stroke="#7356C0"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className={styles.social_media} />
            </section>
          </Container>
        </main>
        <Footer openContactUsModal={this.openContactUsModal} />
        {/*<ContactUsModal
          contactUsModal
          show={this.state.contactModal}
          onHide={() => this.setState({ ...this.state, contactModal: false })}
    />*/}
      </div>
    );
  }
}

export default Surveys;
