import cn from "classnames";
import IconedButtonProps from "./button.props";
import styles from "./index.module.css";

/**
 * Iconed button. Can be linked
  @param className string - (optional),
  @param iconUrl string - url path for the icon,
  @param showInMobile boolean - (optional) Flag to show only on mobile,
  @param iconWidth number - (optional, byDefault=size of img) Width of the icon in pixels
  @param iconHeight number - (optional, byDefault=size of img) Height of the icon in pixels
  @param linkUrl string - (optional, byDefault = undefined), URL for the button's link
 * @returns IconedButton
 */
export default function IconedButton(props: IconedButtonProps) {

  const buttonContent = (
    <>
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
    </>
  );

  if (props.linkUrl) {
    return (
      <a
        href={props.linkUrl}
        className={cn(styles["button"], props.className, "d-flex", "flex-row")}
      >
        {buttonContent}
      </a>
    );
  } else {
    // byDefault. without any links
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
