import cn from 'classnames';
import { ArticleProps } from './Article.props';
import styles from './index.module.css';
export default function Article(props: ArticleProps) {
    return (
            <div className={cn(styles["project"],"position-relative")}>
              <img src={props.image.src} alt={props.image.alt}/>
              <div className={cn(styles["info"], "position-absolute")}>
                <p className={styles['upper-paragraph']}>
                  {props.title}
                </p>
                <p className={styles['small-paragraph']}>
                  {props.description}
                </p>
                <div className="d-flex flex-row justify-content-between">
                  <div className="seen">
                    <div className="seen-image"></div>
                    <span>{props.seenCount}</span>
                  </div>
                  <div className="date">{props.dateCreated}</div>
                  <div className="liked">
                    <div className="liked-image"></div>
                    <span>{props.likedCounter}</span>
                  </div>
                  <div className="disliked">
                    <div className="disliked-image"></div>
                    <span>{props.dislikedCounter}</span>
                  </div>
                </div>
              </div>
            </div>
    )
}