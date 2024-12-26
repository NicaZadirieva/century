import cn from "classnames";
import IconedButtonProps from "./button.props";
import styles from "./index.module.css";
export default function IconedButton(props: IconedButtonProps) {
  return (
    <button
      className={cn(styles["button"], props.className, "d-flex", "flex-row")}
      type="button"
    >
      <img
        style={{
          width: props.iconWidth + " px",
          height: props.iconHeight + " px",
        }}
        alt="Изображение категории кнопки"
        src={props.iconUrl}
        className={cn(styles["button__icon"])}
      />
      <div className={styles["button__text"]}>{props.children}</div>
    </button>
  );
}
