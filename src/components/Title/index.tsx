import cn from 'classnames';
import styles from './index.module.css';
import TitleProps from './title.props';
export default function Title(props: TitleProps) {
    const defaultClassName = styles.title;
    switch(props.level) {
        case 1:
            return <h1 className={cn(defaultClassName, props.className)}>{props.children}</h1>;
        case 2:
            return <h2 className={cn(defaultClassName, props.className)}>{props.children}</h2>;
        case 3:
            return <h3 className={cn(defaultClassName, props.className)}>{props.children}</h3>;
        case 4:
            return <h4 className={cn(defaultClassName, props.className)}>{props.children}</h4>;
        default:
            return <h2 className={cn(defaultClassName, props.className)}>{props.children}</h2>;
    }
}