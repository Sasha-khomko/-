import React from "react";
import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <div className={styles.navWrapper}>
      <ul className={styles.nav}>
        <li>О компании</li>
        <li>Продукцыя</li>
        <li>Решения</li>
        <li>Новасти</li>
      </ul>
    </div>
  );
};
