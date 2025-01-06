import cn from "classnames";
import { ReactNode } from "react";

import { IconedButton, Title } from "../../widgets";
import styles from "./index.module.css";
export default function Articles({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        styles["articles"],
        "restrict-width",
        "d-flex",
        "justify-content-between"
      )}
    >
      <header
        className={cn(
          styles["articles__header"],
          "d-flex",
          "flex-lg-row",
          "flex-column",
          "justify-content-between",
          "content"
        )}
      >
        <div
          className={cn(
            styles["articles__description"],
            "d-flex",
            "flex-column"
          )}
        >
          <Title level={2} className={styles["articles__title"]}>
            Статьи
          </Title>

          <p className={styles["articles__paragraph"]}>
            Здесь будут представлены публикации для сельхозорганизаций и
            фермерских хозяйств
          </p>
          <IconedButton
            linkUrl={"#"}
            className={styles["articles__button"]}
            iconUrl="/icon/message-icon.png"
          >
            Все статьи
          </IconedButton>
        </div>
      </header>
      <main
        className={cn(
          styles["articles__projects"],
          "d-flex",
          "flex-lg-row",
          "flex-column",
          "justify-content-between",
          "content"
        )}
      >
        {children}
      </main>
      
    </div>
  );
}
