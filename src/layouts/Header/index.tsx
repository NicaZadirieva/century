import cn from 'classnames';
import Button from '../../components/shared/Button';
import styles from './index.module.css';
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
      <div className={cn(styles["desk-header-contact"], styles["desk"], "d-flex", "flex-row", "justify-content-between")}>
        <div className={cn("d-flex", "flex-row")}>
          <div className={styles["logo"]}></div>
          <p className={styles["logo-title"]}>Новый век технологий</p>
        </div>
        <ul className={styles["desk-header-contact-list"]}>
          <li>
            <div className={styles["tick"]}></div>Капельное орошение
          </li>
          <li>
            <div className={styles["tick"]}></div>Упаковка для кормовых культур
          </li>
          <li>
            <div className={styles["tick"]}></div>Упаковка для овощных культур
          </li>
        </ul>
        {/**TODO: повтор. Перенести в компонент ContactInfo */}
        <div className={cn(styles["info"] ,"d-flex", "flex-column")}>
          <div className={styles["tel-block"]}>
            <div className={styles["tel"]}>8 800 555-86-88</div>
            <p>Звонок по России - бесплатный</p>
          </div>
          <div className={styles["site-block"]}>
            <div className={styles["site"]}>info@neo-agriservis.ru</div>
            <p>Пн.-Пт.:8:30 - 17:00</p>
          </div>
        </div>
         <Button onClick={() => {}}>Заказать звонок</Button>
      </div>

      <div className={cn(styles["desk-header-menu"], "desk", "d-flex", "flex-row")}>
        <div className={cn(styles["btn-menu"], "d-flex", "flex-row", "align-items-center")}>
          <div className={cn(styles["hamburger-menu"], "d-flex", "flex-column")}>
            <span className={styles["hamburger-line"]}></span>
            <span className={styles["hamburger-line"]}></span>
            <span className={styles["hamburger-line"]}></span>
          </div>

          <a href="#">Продукция</a>
        </div>
        <ul className={cn("d-flex", "flex-row", "justify-content-between")}>
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
        <div className={styles["btn__container"]}>
          <div className={styles["btn__search"]}></div>
        </div>
      </div>
      <div className={cn(styles["desk-menu"], "desk", "position-absolute")}>
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
      <div className={cn(styles["mobile-header"] ,"showInMobile", "flex-row", "justify-content-around", "align-items-center")}>
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
      </div>
      <div className={cn(styles["mobile-header-list"], "showInMobile")}>
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
        <div className={styles["info-trailer"]}>
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
