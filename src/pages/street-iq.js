import React from "react";

import { Container, Row, Col, Button } from "reactstrap";

import MurmurLogo from "../assets/images/streetiq/murmur-logo.svg";
import Louis from "../assets/images/streetiq/Louis_Vuitton.svg";
import Sony from "../assets/images/streetiq/Sony.svg";
import Facebook from "../assets/images/streetiq/facebook.svg";
import Slack from "../assets/images/streetiq/slack.svg";
import Trace from "../assets/images/streetiq/Trace.svg";
import Behavior from "../assets/images/streetiq/behavior.svg";
import Activity from "../assets/images/streetiq/activity.svg";
import Demographics from "../assets/images/streetiq/demographics.svg";
import Interest from "../assets/images/streetiq/interest.svg";
import Abtesting from '../assets/images/streetiq/abtesting.svg'
import AbTestingReport from '../assets/images/streetiq/abtesting-report.svg'
import ArrowUp from '../assets/images/streetiq/arrow-up.svg'

import Slider from "../components/streetiq/slider";

import "../assets/styles/streetiq/index.css";

class StreetIQ extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ width: "100vw", position: "relative" }}>
          <Container id="main-container">
            <Row xs="2" className="main-row">
              <Col className="left-col" xs="5">
                <a href="#">
                  <img src={MurmurLogo} />
                </a>
              </Col>
              <Col className="right-col" xs="7">
                <Button className="right-col-button">Create Campaign</Button>
              </Col>
              <Col className="center-col">
                <h1>Takeover Streets, Grow Sales </h1>
                <p>
                  We help any businesses to target their audiences where they
                  go. Reach local audiences and drive results more effectively.
                  Build awareness, acquire, convert, increase sales
                </p>
                <Button className="right-col-button create-campaign">Create Campaign {<img src={ArrowUp}/>}</Button>
              </Col>
              <Col className="blur-col"></Col>
            </Row>

            <Row className="popular-customers-row" xl="1">
              <h1>
                We help the world&gt;s leading companies to establish the stront
                local presense
              </h1>
              <Row className="customers-row">
                <Col>
                  <a href="#">
                    <img src={Sony} />
                  </a>
                </Col>
                <Col>
                  <a href="#">
                    <img src={Louis} />
                  </a>
                </Col>
                <Col>
                  <a href="#">
                    <img src={Slack} />
                  </a>
                </Col>
                <Col>
                  <a href="#">
                    <img src={Facebook} />
                  </a>
                </Col>
              </Row>
            </Row>
          </Container>
          <Container id="main-container" className="benefits">
            <Row xs="2">
              <Col className="benefits-trait">
                <img src={Trace} />
              </Col>
              <Col className="benefits-text">
                <h1>Benefists of local advertising via Murmur</h1>
                <p>
                  we are data driven ad plaform which helps you to navigate your
                  audiences on streets and connect with them. Find the best
                  locations to advertise by filtering audiences by gender, age,
                  interest, behavior, mobile device type, activity and many more
                  parameters.
                </p>
              </Col>
              <Row className="benefits-list" xl="4">
                <Col>
                  <img src={Demographics} />
                  <h1>Demographics</h1>
                  <p>
                    Filter locations by audience gender, age, marriage status,
                    members in a family.
                  </p>
                </Col>
                <Col>
                  <img src={Activity} />
                  <h1>Activity</h1>
                  <p>
                    Filter location by audiences activity. Identify busy days
                    and hours.
                  </p>
                </Col>
                <Col>
                  <img src={Interest} />
                  <h1>Interest</h1>
                  <p>
                    Filter location by audiences interest.. Learn which places
                    are trending in area, popular housrs and days when people
                    visit those venuew
                  </p>
                </Col>
                <Col>
                  <img src={Behavior} />
                  <h1>Behavior</h1>
                  <p>
                    Filter location by audiences househild income,
                    expense,occupancy
                  </p>
                </Col>
              </Row>
            </Row>
          </Container>
          <Container id="main-container ab-tetsing" className="ab-testing">
            <Row className="street-iq" xl="1">
              <Col>
                <h1>Meet with our street IQ platform</h1>
                <p>
                  Our screns powered by computer vision and patented sensor
                  technology to harvest first hand data and after we enrich it
                  by partnering with global data providers.{" "}
                </p>
              </Col>
            </Row>
            <Row className="slides">
              <Col className="slide-ab-testing">
                 <h4>Lorem ipsum</h4>
                 <p>Our screns powered by computer vision and patented sensor technology to</p>
                 <img src={Abtesting}/>
              </Col>
              <Col className="slider">
              <Slider />
              </Col>
              <Col className="slide-ab-testing">
                 <h4>Lorem ipsum</h4>
                 <p>Our screns powered by computer vision and patented sensor technology to</p>
                 <img src={AbTestingReport}/>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default StreetIQ;
