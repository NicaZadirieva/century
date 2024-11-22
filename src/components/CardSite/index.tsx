import Paragraph from '../Paragraph';
import { CardSiteProps } from './CardSite.props';
import styles from './index.module.css';
export default function CardSite(props: CardSiteProps) {
    return (
        <div className="card-site position-relative">
            {/*TODO: Возможно этой блок лучше перевести на img*/}
            <div className={styles['img-right']} id={props.imgRight}></div>
            <div className={styles['img-left']} id={props.imgLeft}></div>
            <Paragraph className={styles['paragraph']}>
              <a className={styles['link']} href="#">{props.title}</a>
            </Paragraph>
        </div>
    );
}