import cn from 'classnames';

import { Button, IconedButton, Title } from '../../widgets';
import { ArchiveProps } from './Archive.props';
import styles from './index.module.css';
export default function Archive({children}: ArchiveProps) {
    return (
      <div className={styles["archive"]}>
        <div className={cn("restrict-width", "d-flex", "flex-column")}>
          <div className={cn(styles["title-container"], "content")}>
            <Title className={cn(styles["title__btn"])} level={2}>Архив новостей</Title>
            <IconedButton className="desk" linkUrl={'#'} iconUrl="/icon/calendar.png">Все новости</IconedButton>
          </div>

          <div
            className={cn(
              styles['news-container'],
              "d-flex",
              "flex-lg-row",
              "flex-column",
              "justify-content-between",
              "align-items-center",
              "content"
            )}
          >
            {children}
          </div>
          <Button onClick={() => {}} className={cn(styles["archive__btn"], "showInMobile", "block")}>Все новости</Button>
        </div>
      </div>
    );
}