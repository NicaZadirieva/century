import cn from 'classnames';
import IconedButton from '../shared/IconedButton';
import { ArchiveProps } from './Archive.props';
import styles from './index.module.css';
export default function Archive({children}: ArchiveProps) {
    return (
      <div className={styles["archive"]}>
        <div className={cn("restrict-width", "d-flex", "flex-column")}>
          <div className={styles["title-container"]}>
            <h2 className={styles["title"]}>Архив новостей</h2>
            <div
              className={cn(
                "d-flex",
                "align-self-md-end",
                "align-self-sm-start",
                "flex-row",
                "order-2",
                "order-md-1"
              )}
            >
              <IconedButton iconUrl="/icon/calendar.png">Все новости</IconedButton>
    
            </div>
          </div>

          <div
            className={cn(
              "order-1",
              "order-md-2",
              "d-flex",
              "flex-lg-row",
              "flex-column",
              "justify-content-between",
              "align-items-center"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    );
}