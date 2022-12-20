import React from "react";
import { Container, Row, Col } from "reactstrap";

import styles from "../../../assets/styles/mainLanding/main.module.css";

import Copyright from "../../../assets/images/streetiq/copyright.svg";
import FooterLogo from "../../../assets/images/streetiq/logo.svg";
import Email from "../../../assets/images/streetiq/email.svg";
import Call from "../../../assets/images/streetiq/call.svg";
import Location from "../../../assets/images/streetiq/location.svg";

class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hovered: false
        }
    }
    render(){
        const {openContactUsModal} = this.props
        const {hovered} = this.state


       
        return(
            <footer className={styles.street_footer}>
            <Container>
              <Row className={styles.street_footer_top}>
                <Col xs="12" md="3" className="footer_item">
                  <a href="#">
                    <img src={FooterLogo} alt="" />
                  </a>
                  <p className={styles.ft_left_p}>
                    Helping founders to promote their crowd-funding campaigns
                  </p>
                  <ul className={styles.footer_social}>
                    <li>
                      <a href="https://www.facebook.com/murmurcars">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 16.19C22 19.83 19.83 22 16.19 22H15C14.45 22 14 21.55 14 21V15.23C14 14.96 14.22 14.73 14.49 14.73L16.25 14.7C16.39 14.69 16.51 14.59 16.54 14.45L16.89 12.54C16.92 12.36 16.78 12.19 16.59 12.19L14.46 12.22C14.18 12.22 13.96 12 13.95 11.73L13.91 9.28C13.91 9.12 14.04 8.98001 14.21 8.98001L16.61 8.94C16.78 8.94 16.91 8.81001 16.91 8.64001L16.87 6.23999C16.87 6.06999 16.74 5.94 16.57 5.94L13.87 5.98001C12.21 6.01001 10.89 7.37 10.92 9.03L10.97 11.78C10.98 12.06 10.76 12.28 10.48 12.29L9.28 12.31C9.11 12.31 8.98001 12.44 8.98001 12.61L9.01001 14.51C9.01001 14.68 9.14 14.81 9.31 14.81L10.51 14.79C10.79 14.79 11.01 15.01 11.02 15.28L11.11 20.98C11.12 21.54 10.67 22 10.11 22H7.81C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81V16.19Z"
                            fill="#8F9BB3"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/murmurcars/">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                            stroke="#8F9BB3"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                            stroke="#8F9BB3"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17.6361 7H17.6477"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </li>
                    {/* <li>
                      <a    href="#">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.99916 22.7502C1.79916 22.7502 1.60913 22.6702 1.46913 22.5302C1.27913 22.3402 1.19918 22.0602 1.26918 21.8002L2.52919 17.0902C1.68919 15.5302 1.24916 13.7702 1.24916 11.9902C1.24916 6.06023 6.06916 1.24023 11.9992 1.24023C17.9292 1.24023 22.7492 6.06023 22.7492 11.9902C22.7492 17.9202 17.9292 22.7402 11.9992 22.7402C10.1892 22.7402 8.41919 22.2902 6.83919 21.4302L2.19917 22.7202C2.12917 22.7402 2.06916 22.7502 1.99916 22.7502ZM6.93916 19.8802C7.06916 19.8802 7.19917 19.9203 7.31917 19.9803C8.72917 20.8103 10.3492 21.2502 11.9992 21.2502C17.0992 21.2502 21.2492 17.1002 21.2492 12.0002C21.2492 6.90024 17.0992 2.75024 11.9992 2.75024C6.89916 2.75024 2.74916 6.90024 2.74916 12.0002C2.74916 13.6302 3.17915 15.2202 3.98915 16.6202C4.08915 16.7902 4.11917 17.0002 4.06917 17.1902L3.06917 20.9302L6.74916 19.9102C6.80916 19.8902 6.87916 19.8802 6.93916 19.8802Z"
                            fill="#8F9BB3"
                          />
                          <path
                            d="M14.7402 17.7598C14.1202 17.7598 13.4802 17.6198 12.8102 17.3298C12.1802 17.0598 11.5502 16.6998 10.9402 16.2498C10.3402 15.8098 9.75027 15.3098 9.21027 14.7698C8.67027 14.2198 8.17022 13.6398 7.73022 13.0398C7.28022 12.4098 6.92022 11.7898 6.66022 11.1798C6.38022 10.5198 6.24023 9.8698 6.24023 9.2498C6.24023 8.8098 6.32021 8.3898 6.47021 7.9998C6.63021 7.5898 6.89022 7.21979 7.23022 6.89979C7.87022 6.26979 8.79026 6.03981 9.52026 6.38981C9.77026 6.49981 9.98026 6.67981 10.1403 6.91981L11.3002 8.54979C11.4202 8.70979 11.5103 8.87979 11.5803 9.04979C11.6603 9.24979 11.7103 9.44981 11.7103 9.63981C11.7103 9.89981 11.6402 10.1598 11.5002 10.3898C11.4102 10.5398 11.2802 10.7198 11.1102 10.8898L10.9802 11.0298C11.0402 11.1098 11.1102 11.2098 11.2202 11.3298C11.4302 11.5698 11.6602 11.8298 11.9102 12.0798C12.1602 12.3198 12.4102 12.5598 12.6602 12.7698C12.7802 12.8698 12.8803 12.9498 12.9603 12.9998L13.1002 12.8598C13.2802 12.6798 13.4603 12.5398 13.6403 12.4498C13.9703 12.2398 14.4802 12.1898 14.9302 12.3798C15.0902 12.4398 15.2502 12.5298 15.4202 12.6498L17.0903 13.8298C17.3203 13.9898 17.5002 14.2098 17.6202 14.4598C17.7202 14.7098 17.7603 14.9298 17.7603 15.1598C17.7603 15.4598 17.6902 15.7498 17.5602 16.0298C17.4302 16.2898 17.2802 16.5198 17.1002 16.7298C16.7802 17.0798 16.4103 17.3398 16.0103 17.5098C15.6103 17.6798 15.1802 17.7598 14.7402 17.7598ZM8.79022 7.73979C8.73022 7.73979 8.53027 7.73979 8.28027 7.98979C8.09027 8.16979 7.96024 8.35981 7.87024 8.56981C7.78024 8.77981 7.74023 9.01981 7.74023 9.25981C7.74023 9.67981 7.84022 10.1298 8.04022 10.6098C8.25022 11.1098 8.56025 11.6398 8.94025 12.1698C9.33025 12.6998 9.77025 13.2298 10.2603 13.7198C10.7503 14.1998 11.2702 14.6498 11.8102 15.0498C12.3302 15.4298 12.8603 15.7298 13.3903 15.9598C14.1503 16.2898 14.8502 16.3698 15.4202 16.1298C15.6202 16.0498 15.8002 15.9098 15.9802 15.7298C16.0702 15.6298 16.1403 15.5298 16.2003 15.3998C16.2303 15.3298 16.2502 15.2498 16.2502 15.1798C16.2502 15.1598 16.2502 15.1298 16.2202 15.0698L14.5502 13.9098C14.4802 13.8598 14.4102 13.8198 14.3502 13.7998C14.3102 13.8198 14.2503 13.8498 14.1403 13.9598L13.7603 14.3398C13.4703 14.6298 13.0103 14.7098 12.6403 14.5798L12.4603 14.4998C12.2303 14.3798 11.9702 14.1998 11.6802 13.9498C11.4002 13.7098 11.1303 13.4598 10.8403 13.1798C10.5603 12.8898 10.3103 12.6198 10.0703 12.3398C9.81025 12.0298 9.63025 11.7798 9.51025 11.5698L9.40027 11.3098C9.37027 11.2098 9.36023 11.0998 9.36023 10.9998C9.36023 10.7198 9.46027 10.4698 9.65027 10.2698L10.0303 9.8798C10.1403 9.7698 10.1803 9.70981 10.2003 9.66981C10.1703 9.59981 10.1303 9.5398 10.0803 9.4698L8.91022 7.81981L8.79022 7.73979Z"
                            fill="#8F9BB3"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a   href="#">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.9941 2C10.0163 2 8.08293 2.58649 6.43844 3.6853C4.79395 4.78412 3.51223 6.3459 2.75535 8.17317C1.99847 10.0004 1.80044 12.0111 2.18629 13.9509C2.57214 15.8907 3.52455 17.6725 4.92308 19.0711C6.3216 20.4696 8.10343 21.422 10.0432 21.8079C11.9831 22.1937 13.9937 21.9957 15.821 21.2388C17.6482 20.4819 19.21 19.2002 20.3088 17.5557C21.4077 15.9112 21.9941 13.9778 21.9941 12C21.9943 10.6868 21.7357 9.38634 21.2332 8.17304C20.7307 6.95973 19.9941 5.8573 19.0655 4.92869C18.1368 4.00008 17.0344 3.26349 15.8211 2.76098C14.6078 2.25847 13.3074 1.99989 11.9941 2ZM15.1737 17.1525C15.1362 17.2458 15.0793 17.33 15.0066 17.3996C14.934 17.4691 14.8473 17.5223 14.7524 17.5556C14.6575 17.5889 14.5566 17.6015 14.4565 17.5926C14.3563 17.5837 14.2592 17.5535 14.1717 17.504L11.457 15.3946L9.71466 17.002C9.67424 17.0319 9.62695 17.0511 9.57714 17.0579C9.52734 17.0647 9.47662 17.0589 9.42967 17.0409L9.76366 14.0525L9.77436 14.061L9.78118 14.002C9.78118 14.002 14.6662 9.55445 14.8652 9.36496C15.0667 9.17596 15.0002 9.13496 15.0002 9.13496C15.0117 8.90443 14.6387 9.13496 14.6387 9.13496L8.16614 13.299L5.47066 12.381C5.47066 12.381 5.05666 12.2325 5.01766 11.906C4.97666 11.582 5.48415 11.406 5.48415 11.406L16.2011 7.14849C16.2011 7.14849 17.0821 6.75597 17.0821 7.406L15.1737 17.1525Z"
                            fill="#8F9BB3"
                          />
                        </svg>
                      </a>
                  </li>*/}
                    <li>
                      <a href="https://www.linkedin.com/company/murmurcars">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.25 0C18.3197 0 20 1.68038 20 3.75V16.25C20 18.3196 18.3196 20 16.25 20H3.75C1.68038 20 0 18.3196 0 16.25V3.75C0 1.68038 1.68025 0 3.75 0H16.25ZM2.964 17.0427H5.933V7.498H2.964V17.0427ZM17.0432 17.0427V11.8081C17.0432 9.2375 16.4882 7.26075 13.4854 7.26075C12.042 7.26075 11.0736 8.0525 10.6781 8.803H10.6375V7.498H7.7935V17.0427H10.7564V12.322C10.7564 11.0764 10.992 9.87025 12.5359 9.87025C14.0581 9.87025 14.0776 11.2942 14.0776 12.4009V17.0427H17.0432ZM4.449 6.1935C5.39787 6.1935 6.1685 5.4235 6.1685 4.4735C6.1685 3.524 5.39787 2.75337 4.449 2.75337C3.49625 2.75337 2.72788 3.524 2.72788 4.4735C2.72788 5.4235 3.49625 6.1935 4.449 6.1935Z"
                            fill="#8F9BB3"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col xs="12" md="2" className="footer_item">
                  <p className={styles.footer_tt}>For Founders</p>
                  <ul className={styles.footer_nav}>
                    <li>
                      <a
                        href="https://murmur.involve.me/investor-db-murmur-web-page"
                        target="_blank"
                      >
                        Investor DB
                      </a>
                    </li>
                    <li>
                      <a href="https://marketingforstratups.slack.com/join/shared_invite/zt-16aanst8x-cV_PUrBCEKW0E2a_alAClw">
                        Community
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.btw.so/marketing-tools"
                        target="_blank"
                      >
                        Marketing & Advertising Tools
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.basetemplates.com/startup-fundraising-checklist"
                        target="_blank"
                      >
                        Startup Checklist
                      </a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </Col>
                <Col xs="12" md="2" className="footer_item">
                  <p className={styles.footer_tt}>Fundraising</p>
                  <ul className={styles.footer_nav}>
                    <li>
                      <a href="#">How to Raise?</a>
                    </li>
                    <li>
                      <a href="/crowdfunding-marketing-advertising">
                        Crowd Founding
                      </a>
                    </li>
                    <li>
                      <a href="https://www.murmrads.com">Why Murmur?</a>
                    </li>
                    <li>
                      <a href="https://www.murmurads.com/istanbul">Murmur in Istanbul, Turkiye</a>
                    </li>
                    <li>
                      <a href="https://www.murmurads.com/tbilisi">Murmur in Tbilisi Georgia</a>
                    </li>
                  </ul>
                </Col>
                <Col xs="12" md="2" className="footer_item">
                  <p className={styles.footer_tt}>Company</p>
                  <ul className={styles.footer_nav}>
                  <li>
                      <a href="/car-top-advertising">Car-Top Advertising</a>
                    </li>
                    <li>
                      <a href="https://www.survey.murmurads.com/">Create a Research Survey </a>
                    </li>
                    
                    <li>
                      <a href="/hypeiq">Murmur -HypeIQ </a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Events</a>
                    </li>
                    <li>
                      <a href="https://angel.co/company/murmur-8/jobs">
                        We’re hiring!
                      </a>
                    </li>
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
                    <span>Create Campaign Now!</span>
                    <a
                      className={styles.create_champ_btn}
                      onClick={openContactUsModal}
                       onMouseOver={() => {
                           this.setState({
                            hovered: true
                           })
                       }}
                       onMouseLeave = {() => {
                        this.setState({
                            hovered: false
                           })
                       }}
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
                          stroke={`${hovered ? '#7356C0': 'white'}`}
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.99103 15.0087L14.9082 5.09151"
                          stroke={`${hovered ? '#7356C0': 'white'}`}
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
              <div className={styles.footer_custom_contain}>
                <Row className={styles.street_footer_bottom}>
                  <Col md="6" xs="12">
                    <p className={styles.copyright}>
                      <img src={Copyright} alt="" />
                      <span>2022, Murmurcars INC</span>
                    </p>
                  </Col>
                  <Col md="6" xs="12" className="text-right">
                    <a href="#" className={styles.terms}>
                      Privacy Policy, Terms
                    </a>
                  </Col>
                </Row>
              </div>
            </Container>
          </footer>
        )
    }
}


export default Footer