import cn from 'classnames';

import { IconedButton, Title } from '../../widgets';
import { ProjectsProps } from './Projects.props';
import styles from './index.module.css';
export default function Projects({ children } : ProjectsProps) {
    return (
        <div className={cn(styles["projects"], "restrict-width")}>
          <div className={styles["title-container"]}>
            <Title level={2} className={styles["title"]}>Реализованные проекты систем капельного орошения</Title>
            <IconedButton linkUrl={'#'} iconUrl='/icon/flower-icon.png'>Все проекты</IconedButton>
          </div>
          
          <div className={cn(styles["projects-container"], "d-flex", "order-1", "order-md-2")}>
            { children }
          </div>
          
          
        </div>
    )
}