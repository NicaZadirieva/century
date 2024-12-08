import cn from 'classnames';
import { ReactNode } from 'react';
import styles from './index.module.css';
export default function Articles({children}: {children: ReactNode}) {
    return (
    <div className={styles["articles"]}>
        <div className={cn(styles["main-container"], "d-flex", "flex-lg-row", "flex-column", "justify-content-between")}>
          <div className={cn(styles["articles-info"], "d-flex", "flex-column")}>
            <h2 className={cn(styles["articles-title"], styles["title"])}>Статьи</h2>

            <p className={styles['paragraph']}>
              Здесь будут представлены публикации для сельхозорганизаций и
              фермерских хозяйств {/**if articles length == 0*/}
            </p>
            <div className={"desk"}>
            {/**TODO: выделить в переменную внутри Articles */}
              <div className={cn(styles["btn-more"], "d-flex", "flex-row")}>
                <div className={cn(styles["more-img"], styles["companies-img"])}></div>
                <p className={styles["paragraph"]}>Все статьи</p>
              </div>
            </div>
          </div>
          {/**Article */}
          <div className={cn(styles["projects-container"], "d-flex", "flex-lg-row", "flex-column")}>
            {children}
          </div>
        </div>
        <div className={"showInMobile"}>
            {/**TODO: выделить в переменную внутри Articles */}
          <div className={cn(styles["btn-more"], "d-flex", "flex-row")}>
            <div className={cn(styles["more-img"], styles["companies-img"])}></div>
            <p className={styles["paragraph"]}>Все статьи</p>
          </div>
        </div>
    </div>
    );
}