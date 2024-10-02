import React from "react";
import { animateScroll as scroll } from "react-scroll";
import styles from "./ButtonTop.module.css";

export const ButtonTop = () => {
    const scrollToTop = () => {
        scroll.scrollToTop()
    }
  return (
    <div className={styles.ButtonTop}>
      <button onClick={scrollToTop}>l</button>
    </div>
  );
};
