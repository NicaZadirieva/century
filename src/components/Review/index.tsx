import cn from 'classnames';
import Paragraph from '../Paragraph';
import styles from './index.module.css';
import { ReviewProps } from './Review.props';
/**TODO: разобраться с кнопками. Выделить в отдельный компонент Button. */
/**TODO: разобраться с лишними div-ами и стилями */
export default function Review(props: ReviewProps) {
  return (
    <div>
      <div className={cn(styles["review"], "showInMobile")}>
        <div className={cn(styles["who"], "d-flex", "flex-row", "align-items-end")}>
            {/**TODO: добавить изображение + поменять стили 
             * props.logoImage
            */}
          
          <Paragraph className={cn(styles["review-title"], styles["title"])}>
            {/**Интересно как без br. Наверное, с '\n' */}
            {props.reviewHeader}
          </Paragraph>
        </div>
        <div className={styles["info"]}>
          <Paragraph>
            {props.reviewText}
          </Paragraph>
        </div>
        <div className={cn(styles["btns-review"], "d-flex", "flex-row")}>
          <div className={styles["btn-review"]}>
            <div className={styles["search-btn"]}></div>
            {/**TODO: вот тут нужно подумать. Зачем параграф вместе с другой кнопкой внутри другой кнопки? */}
            <Paragraph>Читать полностью</Paragraph>
          </div>
          <div className={styles["btn-review"]}>
            <div className={styles["article-icon"]}></div>

            <Paragraph>Фотоскан</Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}
