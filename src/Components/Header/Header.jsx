import React from "react";
import { ReactComponent as Logo } from "../../assets/img/Logo.svg";
import { Nav } from "../Nav/Nav";
import styles from "./Header.module.css";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu.jsx";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <Nav />
      <div className={styles.block}></div>
      <DropdownMenu />
    </div>
  );
};
