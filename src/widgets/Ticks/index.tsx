import cn from "classnames";
import styles from "./index.module.css";
export default function Ticks() {
  return (
    <ul className={cn(styles["suggests"], "desk")}>
      <li className={styles["suggest"]}>
        <div className={styles["suggest__tick"]}></div>
        <span>Капельное орошение</span>
      </li>
      <li className={styles["suggest"]}>
        <div className={styles["suggest__tick"]}></div>
        <span>Упаковка для кормовых культур</span>
      </li>
      <li className={styles["suggest"]}>
        <div className={styles["suggest__tick"]}></div>
        <span>Упаковка для овощных культур</span>
      </li>
    </ul>
  );
}
