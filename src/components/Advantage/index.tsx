import cn from 'classnames';
import Paragraph from '../Paragraph';
import { AdvantageProps } from './Advantage.props';
import styles from './index.module.css';
export default function Advantage(props: AdvantageProps) {
    return (
        <div className={cn(styles['advantage-container'], 'd-flex', 'flex-row')}>
            <img src={props.imagePath} alt='Преимущество' className={styles['image']} />
            <div className={styles["text-container"]}>
                <Paragraph className={styles['title']}>{props.title}</Paragraph>
                {/**adva-p */}
                <Paragraph>
                  {props.description}
                </Paragraph>
            </div>
        </div>
    )
}