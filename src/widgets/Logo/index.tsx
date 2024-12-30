import cn from 'classnames';
import styles from './index.module.css';
export default function Logo() {
  return (
    <div
      className={cn(
        styles["logo"],
        "d-lg-flex",
        "flex-row",
        "align-items-center",
        "desk"
      )}
    >
      <div className={styles["logo__image"]}></div>
      <p className={styles["logo__title"]}>Новый век технологий</p>
    </div>
  );
}
