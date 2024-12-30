import cn from "classnames";
import IconedButtonProps from "./button.props";
import styles from "./index.module.css";
export default function IconedButton(props: IconedButtonProps) {
  const buttonContent = (<>
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
  </>);
  // TODO: попробовать по-другому проверить тип
  if (props.linkUrl) {
    return (
      <a
        href={props.linkUrl}
        className={cn(styles["button"], props.className, "d-flex", "flex-row")}
      >{buttonContent}</a>
    );
  } else {
    // по умолчанию. Кнопка без ссылки
    return (
    <button
      className={cn(styles["button"], props.className, "d-flex", "flex-row")}
      type="button"
    >
     {buttonContent}
    </button>
  );
}
}
