import cn from "classnames";
import Slider, { Settings } from "react-slick";
import { IconedButton, Title } from "../../widgets";
import { ReviewsProps } from "./Reviews.props";
import styles from "./index.module.css";

export default function Reviews({ children }: ReviewsProps) {
  const settings: Readonly<Settings> = {
    centerMode: true,
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          arrows: true,
          dots: false,
          initialSlide: 1
        },
      },
    ],
  };
  return (
    <div className={styles["reviews"]}>
      <div className={cn("restrict-width", "d-flex", "flex-column")}>
        <div className={cn(styles["title-container"], "d-flex", "content")}>
          <Title level={2}>Отзывы наших клиентов</Title>

          <IconedButton
            linkUrl={"#"}
            className={styles["button"]}
            iconUrl="/icon/message-icon.png"
          >
            Все отзывы
          </IconedButton>
        </div>

        <div className={cn(styles["reviews-block"], "content")}>
          <Slider {...settings}>{children}</Slider>
        </div>
      </div>
    </div>
  );
}
