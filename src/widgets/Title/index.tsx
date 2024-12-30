import cn from 'classnames';
import styles from './index.module.css';
import TitleProps from './title.props';

/**
 * Title util component
 * @param className - (optional) class name to override styles
 * @param children - any react node component (ex. text)
 * @param level - (optional) Level for the title element
 * @returns Title
 */
export default function Title({ className, children, level } : TitleProps) {
    const defaultClassName = styles.title;
    switch(level) {
        case 1:
            return <h1 className={cn(defaultClassName, className)}>{children}</h1>;
        case 2:
            return <h2 className={cn(defaultClassName, className)}>{children}</h2>;
        case 3:
            return <h3 className={cn(defaultClassName, className)}>{children}</h3>;
        case 4:
            return <h4 className={cn(defaultClassName, className)}>{children}</h4>;
        default:
            return <h2 className={cn(defaultClassName, className)}>{children}</h2>;
    }
}