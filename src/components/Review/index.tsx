import cn from 'classnames';
import Paragraph from '../Paragraph';
import IconedButton from '../shared/IconedButton';
import styles from './index.module.css';
import { ReviewProps } from './Review.props';
/**TODO: разобраться с кнопками. Выделить в отдельный компонент Button. */
/**TODO: разобраться с лишними div-ами и стилями */
export default function Review(props: ReviewProps) {
  return (
      <div className={cn(styles["review"], "d-flex", "flex-column")}>
        <div className={cn(styles["review__img"], "d-flex", "flex-column", "align-items-center")}>
            {props.logoImage && <img className={styles['review__img__img']} src={props.logoImage?.src} alt={props.logoImage?.alt} />}
          
          <Paragraph className={styles["review__title"]}>
            {props.reviewHeader}
          </Paragraph>
        </div>
        <div>
          <Paragraph className={styles["review__text"]}>
            {props.reviewText}
          </Paragraph>
        </div>
        <div className={cn(styles["review__button__container"], "d-flex", "flex-row", "align-items-center")}>
            <IconedButton iconWidth={30} iconHeight={25} iconUrl='/icon/search-icon.png'>Читать полностью</IconedButton>
            <IconedButton iconWidth={30} iconHeight={25} iconUrl='/icon/article-icon.png'>Фотоскан</IconedButton>
        </div>
      </div>

  );
}
