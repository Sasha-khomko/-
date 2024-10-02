import React from "react";
import videoBg from "../../assets/videoBg.mp4";
import styles from "./Main.module.css";
import { Header } from "../../Components/Header/Header";
import { Headline } from "../../Components/Headline/Headline";
import { TextContent } from "../../Components/TextContent/TextContent";
import { SliderButton } from "../../Components/SliderButton/SliderButton";
import { NavScroll } from "../../Components/NavScroll/NavScroll";
import { ButtonTop } from "../../Components/ButtonTop/ButtonTop";
import { Tabs } from "../../Components/Tabs/Tabs";

export const Main = () => {
  return (
    <div id="main" className={styles.main}>
      <video src={videoBg} autoPlay loop muted />
      <div className={styles.container}>
        <Header />
        <div className={styles.homePage}>
          <div className={styles.pageSwitching}>
            <div className={styles.emptyBlock1}></div>
            <div className={styles.pageSwitch}>
              <NavScroll />
            </div>
          </div>
          <Tabs />
          {/* <div className={styles.content}>
            <div className={styles.contentTitle}>
              <Headline
                textGreen="РЖЕВ"
                textWhite="МАШ"
                level={1}
                size="128px"
              />
            </div>
            <div className={styles.contentText}>
              <div>
                <Headline
                  textGreen="Эффективные решения"
                  textWhite=" в
                  области управления отходами"
                  level={3}
                  size="24px"
                />
              </div>
              <TextContent
                text="Мы проектируем и строим мусоросортировочные комплексы, станции
                мусороперегрузки, а также производим различное оборудование для
                сортировки и переработки ТКО, предназначенное специально для
                российских условий эксплуатации."
                size="14px"
              />
            </div>
          </div> */}
          {/* <div className={styles.contentSwitghing}>
            <div className={styles.navContent}>
              <ul>
                <li>
                  <Headline textGreen="01" level={3} size="24px" />
                  Пара слов о нашей компании
                </li>
                <li>
                  <Headline textGreen="01" level={3} size="24px" />
                  Мусоросортировочный станция
                </li>
                <li>
                  <Headline textGreen="01" level={3} size="24px" />
                  Мусороперегрузочная станция
                </li>
              </ul>
            </div>
            <div className={styles.infoButton}>
              <SliderButton />
            </div>
          </div> */}
          <div className={styles.block4}>
            <div className={styles.emptyBlock4}></div>
            <div className={styles.wrapperButton}>
              <ButtonTop />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
