import cn from 'classnames';
import ButtonProps from './button.props';
import styles from './index.module.css';
export default function Button(props: ButtonProps) {
  return (
    <button
      className={cn(styles["btn"], props.className)}
    >
      {props.children}
    </button>
  );
}
