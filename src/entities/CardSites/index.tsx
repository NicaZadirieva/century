import cn from 'classnames';
import { CardSitesProps } from './CardSites.props';
import styles from './index.module.css';

export default function CardSites({ children }: CardSitesProps) {
    return (
        <div className={cn(styles["cards-sites"], "d-flex", "flex-wrap")}>
            {children}
        </div>
    )
}