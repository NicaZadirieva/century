import cn from 'classnames';
import { AdvantagesProps } from './Advantages.props';
import styles from './index.module.css';
export default function Advantages({ children }: AdvantagesProps) {
    return (
        <div className={cn(styles["advantages"], "content", "d-flex", "flex-column", "flex-lg-row", "justify-content-between")}>
            {children}
        </div>
    )
}