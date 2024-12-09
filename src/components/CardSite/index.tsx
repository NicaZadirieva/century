import Paragraph from '../Paragraph';
import { CardSiteProps } from './CardSite.props';
import styles from './index.module.css';
export default function CardSite(props: CardSiteProps) {
    return (
        <div className="card-site position-relative">
            {/*TODO: Возможно этой блок лучше перевести на img*/}
                <img className={styles['img-right']} src={props.imgRight.src} alt={props.imgRight.alt} />
                <img className={styles['img-left']} src={props.imgLeft.src} alt={props.imgLeft.alt} />
            <Paragraph className={styles['paragraph']}>
              <a className={styles['link']} href="#">{props.title}</a>
            </Paragraph>
        </div>
    );
}