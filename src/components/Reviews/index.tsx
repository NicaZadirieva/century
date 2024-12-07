import cn from 'classnames';
import { ReviewsProps } from './Reviews.props';
import styles from './index.module.css';
export default function Reviews({ children }: ReviewsProps) {
    return (
        <div className={styles["reviews"]}>
        <div className={cn(styles["main-container"], "d-flex", "flex-column")}>
          <h2 className={styles["title"]}>Отзывы наших клиентов</h2>
          <div className={cn(styles["btn-more"], "d-flex", "align-self-md-end", "align-self-sm-start", "flex-row")}>
            <div className={cn(styles["more-img"], styles["companies-img"])}></div>
            <p className={styles["paragraph"]}>Все отзывы</p>
          </div>

          <div className="reviews-block">
            {children}
            </div>
        </div>
      </div>
    );
}