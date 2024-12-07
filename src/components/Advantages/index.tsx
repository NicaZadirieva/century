import cn from 'classnames';
import { AdvantagesProps } from './Advantages.props';

export default function Advantages({ children }: AdvantagesProps) {
    return (
        <div className={cn("d-flex", "flex-column", "flex-lg-row", "justify-content-between")}>
            {children}
        </div>
    )
}