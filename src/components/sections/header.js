import React from "react";

import { Container } from "reactstrap";

import { Link } from "react-router-dom";

import "../../assets/styles/mainLanding/index.css";
import styles from "../../assets/styles/mainLanding/main.module.css";

import MurmurLogo from "../../assets/images/streetiq/murmur-logo.svg";
import MobileMenu from "../../assets/images/mobil-menu.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handleClick = this.handleClick.bind(this);
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
  render() {
    return (
      <header className={styles.main_header}>
        <Container className={styles.main_header_contain}>
          <div className={styles.main_header_left}>
            <a href="#" className={styles.logo}>
              <img src={MurmurLogo} alt="" />
            </a>
          </div>
          <div
            className={
              this.state.active
                ? "main_header_center activeMenu"
                : "main_header_center"
            }
          >
            <span>
              <Link to="/advertisers">Advertisers</Link>
            </span>
            <span>
              <Link to="/advertise-on-car">Drivers</Link>
            </span>
            <span>
              <a href="https://blog.murmurcars.com">Blog</a>
            </span>
            <span>
              <a href="https://app.murmurcars.com/login">Login</a>
            </span>
          </div>

          <div className={`${styles.main_header_right} d-flex align-center`}>
            <a
              className={styles.header_contact}
              onClick={this.openContactUsModal}
            >
              <span>Contact us</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                  fill="#7356C0"
                />
                <path
                  d="M12.0008 12.87C11.1608 12.87 10.3108 12.61 9.66076 12.08L6.53075 9.58C6.21075 9.32 6.15076 8.85 6.41076 8.53C6.67076 8.21 7.14076 8.15 7.46076 8.41L10.5908 10.91C11.3508 11.52 12.6407 11.52 13.4007 10.91L16.5308 8.41C16.8508 8.15 17.3308 8.2 17.5808 8.53C17.8408 8.85 17.7908 9.33 17.4608 9.58L14.3308 12.08C13.6908 12.61 12.8408 12.87 12.0008 12.87Z"
                  fill="#7356C0"
                />
              </svg>
            </a>
            <button
              type="button"
              onClick={this.handleClick}
              className={styles.mobile_menu}
            >
              <img src={MobileMenu} alt="" />
            </button>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
