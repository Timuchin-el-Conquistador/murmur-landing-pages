import React from "react";

import styles from "../../../assets/css/landing-pages/mainLanding/main.module.css";
import Audience from "../../../assets/images/landing-page/mainlanding/profile.svg";
import Proximity from "../../../assets/images/landing-page/mainlanding/gps.svg";
import Attribution from "../../../assets/images/landing-page/mainlanding/document-filter.svg";
import Reports from "../../../assets/images/landing-page/mainlanding/document-text.svg";
import AdsBG from "../../../assets/images/landing-page/mainlanding/ads-bg.png";



class TransformYourAdvertising extends React.Component{
    render(){
        return(
            <section className={styles.transform_ads_cover}>
            <div className={styles.transform_ads}>
              <div className={styles.transform_cover}>
                <h4 className={styles.transform_ads_h4}>
                  Transform your advertising strategy with progressive solutions
                </h4>
                <div className={styles.transform_ads_txt}>
                  Using Murmur means building trust, brand awareness, achieve
                  higher sales, revenue and displaying highly personalized ads to
                  your audience at any given time of day or location at the click
                  of a few buttons.
                </div>
                <div className={styles.transform_items}>
                  <article>
                    <div className={styles.transform_item}>
                      <a href="#">
                        <img src={Audience} alt="" />
                        <p>Audience</p>
                      </a>
                    </div>
                  </article>
                  <article>
                    <div className={styles.transform_item}>
                      <a href="#">
                        <img src={Proximity} alt="" />
                        <p>Proximity</p>
                      </a>
                    </div>
                  </article>
                  <article>
                    <div className={styles.transform_item}>
                      <a href="#">
                        <img src={Attribution} alt="" />
                        <p>Attribution</p>
                      </a>
                    </div>
                  </article>
                  <article>
                    <div className={styles.transform_item}>
                      <a href="#">
                        <img src={Reports} alt="" />
                        <p>Reports</p>
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <img src={AdsBG} alt="" className={styles.ads_bg} />
          </section>
        
        )
    }
}


export default TransformYourAdvertising