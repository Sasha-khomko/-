import React from "react";
import styles from "./Headline.module.css";

export const Headline = ({ textGreen, textWhite, textWhite2, size, level }) => {
  const Tag = `h${level}`;
  return (
    <Tag className={styles.white} style={{ fontSize: size }}>
      <span className={styles.green}>{textGreen}</span>
      {textWhite}
    </Tag>
  );
};
