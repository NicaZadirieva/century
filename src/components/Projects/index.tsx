import cn from 'classnames';
import Button from '../shared/button';
import { ProjectsProps } from './Projects.props';
import styles from './index.module.css';
export default function Projects({ children } : ProjectsProps) {
    return (
        <div className={cn(styles["projects"], "restrict-width")}>
          <div className={styles["title-container"]}>
            <h2>Реализованные проекты систем капельного орошения</h2>
            <Button iconUrl='/icon/flower-icon.png'>Все проекты</Button>
          </div>
          
          <div className={cn(styles["projects-container"], "d-flex", "order-1", "order-md-2")}>
            { children }
          </div>
          
          
        </div>
    )
}