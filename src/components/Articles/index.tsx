import cn from "classnames";
import { ReactNode } from "react";
import IconedButton from "../shared/IconedButton";
import styles from "./index.module.css";
export default function Articles({ children }: { children: ReactNode }) {
  return (
    <div className={styles["articles"]}>
      <div
        className={cn(
          "restrict-width",
          "d-flex",
          "flex-lg-row",
          "flex-column",
          "justify-content-between"
        )}
      >
        <div className={cn(styles["articles-info"], "d-flex", "flex-column")}>
          <h2 className={styles["title"]}>Статьи</h2>

          <p className={styles["paragraph"]}>
            Здесь будут представлены публикации для сельхозорганизаций и
            фермерских хозяйств
          </p>
          <div className={cn('desk', styles['IconedButton-container'])}>
            <IconedButton iconUrl="/icon/message-icon.png">Все статьи</IconedButton>
          </div>
        </div>
          
        <div
          className={cn(
            styles["projects-container"],
            "d-flex",
            "flex-lg-row",
            "flex-column"
          )}
        >
          {children}
        </div>
      </div>
      <div  className="showInMobile">
        <IconedButton iconUrl="/icon/message-icon.png">Все статьи</IconedButton>
      </div>
    </div>
  );
}
