import cn from 'classnames';
import Paragraph from '../../widgets/Paragraph';
import { ProjectProps } from './Project.props';
import styles from './index.module.css';
export default function Project(props: ProjectProps){
    return (
        <div style={{ backgroundImage: `url(${props.image.src})`}} className={cn(styles['project'], "position-relative")}>
            <div className={cn(styles['info'], "position-absolute")}>
                <Paragraph className={styles['upper-paragraph']}>{props.description}</Paragraph>
                <div className="d-flex flex-row justify-content-between">
                  <div className={styles["seen"]}>
                    <div className={styles["seen-image"]}></div>
                    <span>{props.seenCount || 0}</span>
                  </div>
                  <div className={styles["date"]}>{props.dateCreated}</div>
                  <div className={styles["liked"]}>
                    <div className={styles["liked-image"]}></div>
                    <span>{props.likedCounter || 0}</span>
                  </div>
                  <div className={styles["disliked"]}>
                    <div className={styles["disliked-image"]}></div>
                    <span>{props.dislikedCounter || 0}</span>
                  </div>
                </div>
            </div>
        </div>
    );
}