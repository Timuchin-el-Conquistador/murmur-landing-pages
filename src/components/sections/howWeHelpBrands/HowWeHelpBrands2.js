import React from "react";

import classes from "../../../assets/styles/surveys/index.module.scss";
import Shade from "../../../assets/images/hypeIQ/Vector.png";

class HowWeHelpBrands extends React.Component {
  render() {
    ///const { width: vieport_width } = this.props;
    return (
      <section className={classes.help_brands_section}>
        <img src={Shade} alt="" className={classes.left_watermark} />
        <img src={Shade} alt="" className={classes.right_watermark} />
        <div className={classes.help_brands_container_top}>
          <div className={`${classes.alighned}`}>
            <span className={classes.text}>What are</span>
            <div className={classes.ray_right} />
          </div>
          <div className={`${classes.alighned}`}>
            <div className={classes.ray_left} />
            <span className={classes.low_opacity_text}>brands</span>
          </div>
        </div>
        <div className={classes.help_brands_container_bottom}>
          <p className={classes.body_text}>
            Risus, consequat nam et, id condimentum. Risus elementum sit quis
            vel lorem. Proin posuere tortor massa orci, sed posuere. A enim sed
            habitant laoreet fringilla faucibus morbi dignissim. Urna purus arcu
            libero, sapien diam. Tellus eu pellentesque ultrices eget est, in
            nisl. Eros et massa morbi arcu et cursus ut. Odio duis sed arcu
            porttitor posuere consequat, iaculis urna. Urna.
          </p>
        </div>
      </section>
    );
  }
}

export default HowWeHelpBrands;
