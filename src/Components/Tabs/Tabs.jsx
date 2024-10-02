import React, { useState } from "react";
import styles from "./Tabs.module.css";
import { Headline } from "../Headline/Headline.jsx";
import { TextContent } from "../TextContent/TextContent.jsx";
import { SliderButton } from "../SliderButton/SliderButton.jsx";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <div className={styles.blockContent}>
        {activeTab === "tab1" && (
          <div className={styles.wrapperContent}>
            <div className={styles.wrapperHeadline}>
              <Headline
                textGreen="РЖЕВ"
                textWhite="МАШ"
                level={1}
                size="128px"
              />
            </div>
            <div className={styles.content}>
              <Headline
                textGreen="Эффективные решения"
                textWhite=" в
                  области управления отходами"
                level={3}
                size="24px"
              />
              <TextContent
                text="Мы проектируем и строим мусоросортировочные комплексы, станции
                мусороперегрузки, а также производим различное оборудование для
                сортировки и переработки ТКО, предназначенное специально для
                российских условий эксплуатации."
                size="14px"
              />
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            <div className={styles.wrapperHeadline}>
              <h1>мусоро</h1>
              <Headline
                textGreen="сортировочный"
                textWhite="комплекс"
                level={1}
                size="48px"
              />
            </div>
            <div className={styles.content}>
              <Headline
                textGreen="Комплекс по обработке коммунальных отходов "
                textWhite="с высокой степенью механизации "
                level={3}
                size="24px"
              />
              <TextContent
                text="Оснащенн «открывателем пакетов» собственной разработки, барабанным грохотом, магнитными сепараторами, пресс-компактором для остаточных фракции, а также горизонтальным прессом для вторичного сырья."
                size="14px"
              />
            </div>
          </div>
        )}
        {activeTab === "tab3" && (
          <div>
            <div className={styles.wrapperHeadline}>
              <h1>мусоро</h1>
              <Headline
                textGreen="перегрузочная"
                textWhite="станцыя"
                level={1}
                size="48px"
              />
            </div>
            <div className={styles.content}>
              <Headline
                textGreen="Cтанция на пресс-компактор"
                textWhite="RMZ PC40-360"
                level={3}
                size="24px"
              />
              <TextContent
                text="Предназначена для перегрузки отходов из мусоровозов в контейнер для последующей перевозки на большегрузном транспорте (мультилифт). Бетонная или сборно-разборная металлическая эстакада может быть оперативно смонтирована в удобном месте. Разгрузка мусоровоза занимает от 3 до 10 минут, а заполнение контейнера объемом 30 м3 за 40 минут. Может принять до 150 тонн отходов в смену. Не требует строительства ангара, сложных бетонных работ."
                size="14px"
              />
            </div>
          </div>
        )}
      </div>
      <div className={styles.wrapperTabs}>
        <ul className={styles.tabs}>
          <li onClick={() => handleTabClick("tab1")}>
            <Headline textGreen="01" level={4} size="24px" />
            <span>Пара слов о нашей компании</span>
          </li>
          <li onClick={() => handleTabClick("tab2")}>
            <Headline textGreen="02" level={4} size="24px" />
            <span>Мусоросортировочный станция</span>
          </li>
          <li onClick={() => handleTabClick("tab3")}>
            <Headline textGreen="02" level={4} size="24px" />
            <span>Мусороперегрузочная станция</span>
          </li>
        </ul>
        <div>
          <SliderButton />
        </div>
      </div>
    </div>
  );
};
