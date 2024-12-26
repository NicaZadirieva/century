import cn from 'classnames';
import Title from '../Title';
import { ReviewsProps } from './Reviews.props';
import styles from './index.module.css';
export default function Reviews({ children }: ReviewsProps) {
    return (
        <div className={styles["reviews"]}>
        <div className={cn("restrict-width", "d-flex", "flex-column")}>
          <Title level={2}>Отзывы наших клиентов</Title>
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