import cn from 'classnames';
import Button from '../../Button';
import styles from './index.module.css';
/**TODO: возможно это все-таки MobileHeader */
export default function MobileMenu() {
  return (
    <>
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
    </>
  );
}
