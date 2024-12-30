import cn from 'classnames';
import styles from './index.module.css';
export default function ContactDetails() {
    return (
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
    )
}