import cn from 'classnames';
import { useState } from 'react';
import styles from './index.module.css';
/**TODO: возможно это все-таки MobileHeader */
export default function MobileMenu() {
  const [displayed, setDisplayed] = useState(false);
  const toggleMenu = function() {
    setDisplayed(!displayed);
  }
  return (
    <div className={styles["header__mobile"]}>
      <header
        className={cn(
          styles["header"],
          "d-flex",
          "flex-row",
        )}
      >
        <div onClick={toggleMenu} className={cn(styles["hamburger"], "d-flex", "flex-column")}>
          <span className={styles["hamburger-line"]}></span>
          <span className={styles["hamburger-line"]}></span>
          <span className={styles["hamburger-line"]}></span>
        </div>
        <div className={cn("d-flex", "flex-row", styles["logo"])}>
          <div className={styles["logo__img"]}></div>
          <h2 className={styles["logo__title"]}>Новый век технологий</h2>
        </div>
        <div className={styles["search"]}></div>
      </header>
      <div style={{display: displayed ? "block" : "none"}} >
        <ul className={cn(styles["header__list"], "m-0")}>
          <li>
            <a href="#">Капельное орошение</a>
          </li>
          <li>
            <a href="#">Упаковка для овощных культур</a>
          </li>
          <li>
            <a href="#">Упаковка для кормовых культур</a>
          </li>
          <li>
            <a href="#">Услуги</a>
          </li>
          <li>
            <a href="#">Реализованные проекты</a>
          </li>
          <li>
            <a href="#">Статьи</a>
          </li>
          <li>
            <a href="#">Клиенты</a>
          </li>
          <li>
            <a href="#">О компании</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
       
      </div>
    </div>
  );
}
