import React from "react";
import styles from "./TextContent.module.css";

export const TextContent = ({ text, size }) => {
  return (
    <span className={styles.content} style={{ fontSize: size }}>
      {text}
    </span>
  );
};
