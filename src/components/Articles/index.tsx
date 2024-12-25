import cn from "classnames";
import { ReactNode } from "react";
import IconedButton from "../shared/IconedButton";
import styles from "./index.module.css";
export default function Articles({ children }: { children: ReactNode }) {
  return (
    <div className={styles["articles"]}>
      <header
        className={cn(
          "restrict-width",
          "d-flex",
          "flex-lg-row",
          "flex-column",
          "justify-content-between"
        )}
      >
        <div className={cn(styles["articles__description"], "d-flex", "flex-column")}>
          <h2 className={styles["articles__title"]}>Статьи</h2>

          <p className={styles["articles__paragraph"]}>
            Здесь будут представлены публикации для сельхозорганизаций и
            фермерских хозяйств
          </p>
          <div className={'desk'}>
            <IconedButton className={styles["articles__button"]} iconUrl="/icon/message-icon.png">Все статьи</IconedButton>
          </div>
        </div>
          
        <main
          className={cn(
            styles["articles__projects"],
            "d-flex",
            "flex-lg-row",
            "flex-column"
          )}
        >
          {children}
        </main>
      </header>
      <div  className="showInMobile">
        <IconedButton className={styles["articles__button"]} iconUrl="/icon/message-icon.png">Все статьи</IconedButton>
      </div>
    </div>
  );
}
