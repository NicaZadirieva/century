import cn from "classnames";
import styles from "./index.module.css";
export default function Menu() {
  return (
    <div className={styles['header__menu']}>
      <ul
        className={cn(
          styles["header__menu__list"],
          "d-flex",
          "flex-row",
          "align-items-center",
          "justify-content-between"
        )}
      >
        <li
          className={cn(
            styles["header__menu__li"],
            "d-flex",
            "flex-row",
            "align-items-center"
          )}
        >
          <div
            className={cn(styles["hamburger-menu"], "d-flex", "flex-column")}
          >
            <span className={styles["hamburger-line"]}></span>
            <span className={styles["hamburger-line"]}></span>
            <span className={styles["hamburger-line"]}></span>
          </div>

          <a href="#">Продукция</a>
        </li>
        <li className={styles["header__menu__li"]}>
          <a href="#">Услуги</a>
        </li>
        <li className={styles["header__menu__li"]}>
          <a href="#">Реализованные проекты</a>
        </li>
        <li className={styles["header__menu__li"]}>
          <a href="#">Статьи</a>
        </li>
        <li className={styles["header__menu__li"]}>
          <a href="#">Клиенты</a>
        </li>
        <li className={styles["header__menu__li"]}>
          <a href="#">О компании</a>
        </li>
        <li className={styles["header__menu__li"]}>
          <a href="#">Контакты</a>
        </li>
        <li>
          <div className={styles["btn__container"]}>
            <div className={styles["btn__search"]}></div>
          </div>
        </li>
      </ul>

      <div className={cn(styles["menu"], "desk", "position-absolute")}>
        <ul>
          <li>
            <a href="#">Капельное орошение</a>
          </li>
          <li>
            <a href="#">Упаковка для овощных культур</a>
          </li>
          <li>
            <a href="#">Упаковка для кормовых культур</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
