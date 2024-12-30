import cn from "classnames";

import { Button, Logo, Ticks } from '../../widgets';
import ContactDetails from '../../widgets/ContactDetails';
import styles from "./index.module.css";
export default function Header(/* props: HeaderProps */) {
  // TODO:
  // function showForm() {
  //   props.showForm({
  //     /**Здесь должны быть ref */
  //     form: document.forms["form-contact"],
  //     popup: document.querySelector(".popup"),
  //   });
  // }
  return (
    <header>
      <div
        className={cn(
          styles["header"],
          "desk",
          "d-flex",
          "flex-row",
          "justify-content-between",
          "align-items-center"
        )}
      >
        <Logo />
        <Ticks/>
        <ContactDetails/>
        <Button onClick={() => {}}>Заказать звонок</Button>
      </div>
      {/** TODO: вынести в MobileHeader */}
      <div
        className={cn(
          styles["header__menu"],
          "desk",
          "d-flex",
          "flex-row",
          "align-items-center"
        )}
      ></div>
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
      <header
        className={cn(
          styles["header"],
          "showInMobile",
          "flex-row",
          "justify-content-around",
          "align-items-center"
        )}
      >
        <div className={cn(styles["hamburger"], "d-flex", "flex-column")}>
          <span className={styles["hamburger-line"]}></span>
          <span className={styles["hamburger-line"]}></span>
          <span className={styles["hamburger-line"]}></span>
        </div>
        <div className="d-flex flex-row">
          <div className={styles["logo"]}></div>
          <p>Новый век технологий</p>
        </div>
        <div className={styles["search"]}></div>
      </header>
      {/**TODO: протестировать на мобилках */}
      <div className={cn(styles["header__list"], "showInMobile")}>
        <ul className="p-0 m-0">
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
        <Button onClick={() => {}}>Заказать звонок</Button>
      </div>

      <div className={cn(styles["trailer"], "position-relative")}>
        <video
          id="video"
          height="auto"
          muted
          autoPlay={true}
          loop={true}
          preload="auto"
        >
          <source src="/video/trailer.mp4"></source>
        </video>
        <div className={styles["trailer__info"]}>
          <h1>Новый век агротехнологий</h1>
          <p>
            Мы создаем и внедряем инновационные технологии интеллектуального
            орошения, повышающие эффективность сельского хозяйства и качество
            агрокультур
          </p>
        </div>
      </div>
    </header>
  );
}
