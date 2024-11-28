import cn from 'classnames';
import { ProjectsProps } from './Projects.props';
import styles from './index.module.css';
export default function Projects({ children } : ProjectsProps) {
    return (
        <div className={cn(styles["projects"] ,"d-flex", "flex-column")}>
          {/**Title */}
          <h2 className={cn(styles["projects-title"], styles["title"])}>
            Реализованные проекты систем капельного орошения
          </h2>
          {/** TODO: Сделать массив */}
          <div className={cn(styles["projects-container"], "d-flex", "order-1", "order-md-2")}>
            { children }
          </div>
          {/** TODO: Projects maxCounter=4. if maxCounter < length => show this*/}
          <div className={cn(styles["btn-more"], "d-flex", "align-self-md-end", "align-self-sm-start", "flex-row", "order-2", "order-md-1")}>
            <div className={styles["more-img"]}></div>
            <p>Все проекты</p>
          </div>
        </div>
    )
}