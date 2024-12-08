import Paragraph from '../Paragraph';
import { CardSiteProps } from './CardSite.props';
import styles from './index.module.css';
export default function CardSite(props: CardSiteProps) {
    return (
        <div className="card-site position-relative">
            {/*TODO: Возможно этой блок лучше перевести на img*/}
            <div className={styles['img-right']}>
                <img src={props.imgRight.src} alt={props.imgRight.alt} />
            </div>
            <div className={styles['img-left']}>
                <img src={props.imgLeft.src} alt={props.imgLeft.alt} />
            </div>
            <Paragraph className={styles['paragraph']}>
              <a className={styles['link']} href="#">{props.title}</a>
            </Paragraph>
        </div>
    );
}