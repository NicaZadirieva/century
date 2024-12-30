import cn from 'classnames';
import ButtonProps from './button.props';
import styles from './index.module.css';

/**
 * Simple button. Util component (widget)
 * @param props 
 * @param props.className optional class name
 * @param props.onClick handler for click event 
 * @returns Button
 */
export default function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick}
      className={cn(styles["btn"], props.className)}
    >
      {props.children}
    </button>
  );
}
