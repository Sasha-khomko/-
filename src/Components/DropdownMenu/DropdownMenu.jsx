import React, { useState } from "react";
import { Headline } from "../Headline/Headline";
import { ReactComponent as DropdownLogo } from "../../assets/img/ButtonMenu.svg";
import { ReactComponent as Cross } from "../../assets/img/CrossButton.svg";
import { ReactComponent as SearchIcon } from "../../assets/img/SearchIcon.svg";
import { ReactComponent as PhoneIcon } from "../../assets/img/PhoneIcon.svg";
import { ReactComponent as TelegramIcon } from "../../assets/img/TelegramIcon.svg";
import { ReactComponent as EnvelopeIcon } from "../../assets/img/EnvelopeIcon.svg";
import styles from "./DropdownMenu.module.css";

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.dropdownToggle}>
        {isOpen ? <Cross /> : <DropdownLogo />}
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Поиск по сайту..."
                className={styles.searchInput}
              />
              <span className={styles.searchIcon}>
                <SearchIcon />
              </span>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.infoNav}>
              <div className={styles.aboutUs}>
                <ul>
                  <li>
                    <Headline textWhite="О Нас" size="24px" />
                  </li>
                  <li>Наша Компания</li>
                  <li>Вопрос Ответ</li>
                  <li>История</li>
                  <li>Решения</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <Headline textWhite="Продукция" size="24px" />
                  </li>
                  <li>Все</li>
                  <li>Грохоты и сепараторы</li>
                  <li>Прессовое оборудование</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <Headline textWhite="Пресс-центр" size="24px" />
                  </li>
                  <li>Новости</li>
                  <li>Наши Отзывы</li>
                  <li>Новости</li>
                </ul>
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <Headline textWhite="Контакты" size="24px" />
                </li>
                <li>+1 (234) 567-89-01</li>
                <li>example@mail.com</li>
                <li className={styles.icons}>
                  <PhoneIcon />
                  <TelegramIcon />
                  <EnvelopeIcon />
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
