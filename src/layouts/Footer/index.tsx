import cn from "classnames";
import SocialButton from '../../widgets/SocialButton';
import styles from "./index.module.css";
/**TODO: Подумать, надо ли разделять на компоненты */
/**TODO: что-то в принципе можно выделить в константы. В том числе и компоненты */
export default function Footer() {
  return (
    <footer
      className={cn(
        styles["footer"],
        "d-flex",
        "flex-row",
        "justify-content-between",
        "align-items-center"
      )}
    >
      <div className={cn(styles["logo"], "d-lg-flex", "flex-row", "align-items-center", "desk")}>
        <div className={styles["logo__image"]}></div>
        <p className={styles["logo__title"]}>Новый век технологий</p>
      </div>
      <ul className={cn(styles["footer__suggests"], "desk")}>
        <li className={styles["footer__suggest"]}>
          <div className={styles["footer__suggest__tick"]}></div>
          <span>Капельное орошение</span>
        </li>
        <li className={styles["footer__suggest"]}>
          <div className={styles["footer__suggest__tick"]}></div>
          <span>Упаковка для кормовых культур</span>
        </li>
        <li className={styles["footer__suggest"]}>
          <div className={styles["footer__suggest__tick"]}></div>
          <span>Упаковка для овощных культур</span>
        </li>
      </ul>
      <div className={cn(styles["contact"], "d-flex", "flex-column")}>
        <div className={styles["contact__phone__container"]}>
          <a href="tel:+78005558688" className={styles["contact__phone"]}>8 800 555-86-88</a>
          <p>Звонок по России - бесплатный</p>
        </div>
        <div className={styles["contact__email__container"]}>
          <a href="mailto:info@neo-agriservis.ru" className={styles["contact__email"]}>info@neo-agriservis.ru</a>
          <p>Пн.-Пт.:8:30 - 17:00</p>
        </div>
      </div>
      <div className={cn(styles["social__content"], "d-flex", "flex-column", "justify-content-center")}>
        <p className={styles["social__paragraph"]}>Мы в соц.сетях</p>
        <div className={cn(styles["social__buttons"], "d-flex", "flex-row", "justify-content-between")}>
          <SocialButton linkUrl={"#"} iconUrl="/icon/inst-icon.png" alt="Инстаграмм"/>
          <SocialButton linkUrl={"#"} iconUrl="/icon/vk-icon.png" alt="Вконтакте"/>
          <SocialButton linkUrl={"#"} iconUrl="/icon/youtube-icon.png" alt="Ютуб"/>
        </div>
      </div>
    </footer>
  );
}
