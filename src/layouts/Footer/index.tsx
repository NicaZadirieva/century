import cn from "classnames";
import styles from "./index.module.css";
/**TODO: Подумать, надо ли разделять на компоненты */
/**TODO: что-то в принципе можно выделить в константы. В том числе и компоненты */
export default function Footer() {
  return (
    <>
      <div
        className={cn(
          styles["footer"],
          "d-flex",
          "flex-row",
          "justify-content-between"
        )}
      >
        <div className={cn("d-lg-flex", "flex-row", "desk")}>
          <div className={styles["logo"]}></div>
          <p className={styles["logo-title"]}>Новый век технологий</p>
        </div>
        <ul className={cn(styles["desk-header-contact-list"], "desk")}>
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
        <div className={cn(styles["info"], "d-flex", "flex-column")}>
          <div className={styles["tel-block"]}>
            <div className={styles["tel"]}>8 800 555-86-88</div>
            <p>Звонок по России - бесплатный</p>
          </div>
          <div className={styles["site-block"]}>
            <div className={styles["site"]}>info@neo-agriservis.ru</div>
            <p>Пн.-Пт.:8:30 - 17:00</p>
          </div>
        </div>
        <div>
          <p>Мы в соц.сетях</p>
          <div className={cn("d-flex", "flex-row", "justify-content-between")}>
            {/**TODO: сделать компонент */}
            {/**SocialButton src={} alt={} */}
            <div className={styles["social-btn"]}>
              <img src={"/icon/inst-icon.png"} alt="Инстаграмм" />
            </div>
            <div className={styles["social-btn"]}>
              <img src={"/icon/vk-icon.png"} alt="Вконтакте" />
            </div>
            <div className={styles["social-btn"]}>
              <img src={"/icon/youtube-icon.png"} alt="Ютуб" />
            </div>
          </div>
        </div>
      </div>
      {/**About */}
      <div
        className={cn(
          styles["about"],
          "d-flex",
          "flex-row",
          "justify-content-between"
        )}
      >
        <p>
          © 1998-2019 Все права защищены владельцами торговой марки <br /> ЗАО
          "Новый век агротехнологий"
        </p>
        <div>
          <a href="#">Положение о защите персональных данных</a>
          <p>Разработка сайта - drupal-coder.ru</p>
        </div>
      </div>
    </>
  );
}
