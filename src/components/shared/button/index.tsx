import cn from 'classnames';
import ButtonProps from './button.props';
import styles from './index.module.css';
export default function Button(props: ButtonProps) {
    return (
        <button className={cn(styles["button"], 
            props.className,
            "d-flex", 
            "flex-row")}
                type="button">
                <img alt="Изображение категории кнопки" src={props.iconUrl} className={cn(styles["button__icon"])}/>
                <div className={styles["button__text"]}>{props.children}</div>
        </button>
    );
}