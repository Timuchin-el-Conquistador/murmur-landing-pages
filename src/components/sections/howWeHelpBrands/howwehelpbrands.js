import React from "react";

import classes from "../../../assets/css/hypeIQ/index.module.scss";
import styles from "../../../assets/css/landing-pages/mainLanding/main.module.css";
import Shade from "../../../assets/images/hypeIQ/Vector.png";

class HowWeHelpBrands extends React.Component {
  render() {
    const { width: vieport_width } = this.props;
    return (
      <section className={classes.help_brands_section}>
        <img src={Shade} alt="" className={classes.left_watermark} />
        <img src={Shade} alt="" className={classes.right_watermark} />
        <div className={classes.help_brands_container_top}>
          <div className={classes.alighned}>
            <span className={classes.text}>How we</span>
            <div className={classes.ray_right} />
            {vieport_width < 801 && <div className={classes.ray_left} />}
          </div>
          <div className={`${classes.alighned} ${classes.width_80percent}`}>
            {vieport_width > 800 && <div className={classes.ray_left} />}
            <div>
              <span className={classes.hight_opacity_text}>help</span>
              <span className={classes.low_opacity_text}>brands</span>
            </div>
          </div>
        </div>
        <div className={classes.help_brands_container_bottom}>
          <div className={`${styles.tech_bottom} ${styles.hypeiq}`}>
            <h4> The benefits of Computer Vision</h4>
            <p>
              Via Murmur’s vision sensors (Lumen) on LCD backpacks, companies
              can analyze the attractiveness of their ads, and most specifically
              which part of the ad catch attention of the potential clients,
              while our backpack walkers show the ad all around the city
            </p>
          </div>
          <div className={`${styles.tech_bottom} ${styles.hypeiq}`}>
            <h4> The benefits of Street IQ system</h4>
            <p>
              Via Murmur’s Street IQ system, our clients receive weekly
              analytics about the gender, age and preferences of the potential
              customers
            </p>
          </div>
          <div className={`${styles.tech_bottom} ${styles.hypeiq}`}>
            <h4> The productiveness of these tools</h4>
            <p>
              Murmur’s Lumen and Street IQ systems are one of the main parts of
              Hype IQ platform. All gathered data from the previously mentioned
              systems help Murmur’s team to build a strong and stable marketing
              strategy for our clients
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default HowWeHelpBrands;
