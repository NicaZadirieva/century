import cn from 'classnames';
import Slider, { Settings } from 'react-slick';
import Title from '../Title';
import IconedButton from '../shared/IconedButton';
import { ReviewsProps } from './Reviews.props';
import styles from './index.module.css';



export default function Reviews({ children }: ReviewsProps) {
  const settings : Readonly<Settings> = {
    centerMode: true,
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
    return (
      <div className={styles["reviews"]}>
        <div className={cn("restrict-width", "d-flex", "flex-column")}>
          <div className={cn(styles["title-container"], "d-flex", "flex-row")}>
            <Title level={2}>Отзывы наших клиентов</Title>
          
              <IconedButton className={styles["button"]} iconUrl="/icon/message-icon.png">
                Все отзывы
              </IconedButton>
          </div>

          <div className={cn(styles["reviews-block"])}>
            <Slider {...settings}>{children}</Slider>
          </div>
        </div>
      </div>
    );
}