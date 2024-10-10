import React from 'react';
import styles from "./Preloader.module.scss";
import defaultImage from "../../img/preloaders/default.gif";
import mobileImage from "../../img/preloaders/mobile.png";
import errorImage from "../../img/preloaders/error.png";

const Preloader = ({ variant = "default" }) => {
  const content = {
    "default": {image: defaultImage, text: "Cooking Pokie...."},
    "mobile": {image: mobileImage, text: "Desktop is unavailable. Play on your mobile"},
    "error": {image: errorImage, text: "Sorry, there seems to be a problem"},
  }

  return (
    <div className={styles.preloader}>
      <div className={styles.loader}>
        <div className={styles.loaderInner}>
          <img src={content[variant].image} className={variant === "default" ? styles.default : ""} />
          <div className={styles.content}>
            <p>
              {content[variant].text}
            </p>
            {variant === "default" && (<div className={styles.progressBar}>
              <div className={styles.progressValue}
                style={{width: `10%`}}
              ></div>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;