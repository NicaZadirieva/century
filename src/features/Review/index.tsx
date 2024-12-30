import cn from 'classnames';
import { IconedButton } from '../../widgets';
import Paragraph from '../../widgets/Paragraph';
import styles from './index.module.css';
import { ReviewProps } from './Review.props';

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
