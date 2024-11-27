import { NewsItemProps } from './NewsItem.props';

export default function NewsItem(props: NewsItemProps) {
    return (
      <div className={styles["archive-block"]}>
        <div className="archive-date-month">
          <div className="archive-date">{props.day > 9 ? props.day : '0' + props.day}</div>
          <div className="month">{props.month}</div>
        </div>
        <p className="title">
          {props.title}
        </p>
        <p className="archive-about">
          {props.description}
        </p>
        <div className="btn-archive d-flex flex-column justify-content-center">
          <div>Подробнее</div>
        </div>
      </div>
    );
}