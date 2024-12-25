import Button from '../shared/Button';
import styles from './index.module.css';
import { NewsItemProps } from './NewsItem.props';
export default function NewsItem(props: NewsItemProps) {
    return (
      <div className={styles['archive']}>
        <div className={styles["archive__date"]}>
          <span className={styles["archive__date__day"]}>{props.day > 9 ? props.day : '0' + props.day}</span>
          <span className={styles["archive__date__month"]}>{props.month}</span>
        </div>
        <p className={styles["title"]}>
          {props.title}
        </p>
        <p className={styles["archive__description"]}>
          {props.description}
        </p>
        <Button onClick={() => {}} className={styles["archive__button"]}> Подробнее </Button>
      </div>
    );
}