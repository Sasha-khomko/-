import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/img/Arrow.svg";
import styles from "./SliderButton.module.css";

export const SliderButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.sliderContainer} ${hovered ? styles.hovered : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className={styles.text}>Узнать Подробнее</span>
      <div
        className={`${styles.slider} ${hovered ? styles.sliderHovered : ""}`}
      >
        <span className={styles.arrow}>
          <Arrow />
        </span>
      </div>
    </div>
  );
};
