import cn from 'classnames';
import styles from './index.module.css';
import { NewsItemProps } from './NewsItem.props';
export default function NewsItem(props: NewsItemProps) {
    return (
      <div className={styles['archive-block']}>
        <div className={styles["archive-date-month"]}>
          <div className={styles["archive-date"]}>{props.day > 9 ? props.day : '0' + props.day}</div>
          <div className={styles["month"]}>{props.month}</div>
        </div>
        <p className={styles["title"]}>
          {props.title}
        </p>
        <p className={styles["archive-about"]}>
          {props.description}
        </p>
        <div className={cn(styles["btn-archive"], "d-flex", "flex-column", "justify-content-center")}>
          <div>Подробнее</div>
        </div>
      </div>
    );
}