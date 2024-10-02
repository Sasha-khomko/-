import React from "react";
import { Link } from "react-scroll";
import styles from "./NavScroll.module.css";

export const NavScroll = () => {
  return (
    <div className={styles.navScroll}>
      <ul>
        <li>
          <Link
            to="main"
            smooth={true}
            duration={500}
            activeClass={styles.active}
            spy={true}
          >
            Компания
          </Link>
        </li>
        <li>
          <Link
            to="infoCompany"
            smooth={true}
            duration={500}
            activeClass={styles.active}
            spy={true}
          >
            Кто мы
          </Link>
        </li>
        <li>
          <Link
            to="advantages"
            smooth={true}
            duration={500}
            activeClass={styles.active}
            spy={true}
          >
            Преимущества
          </Link>
        </li>
      </ul>
    </div>
  );
};
