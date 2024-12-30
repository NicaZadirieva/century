import cn from "classnames";
import { Logo, Ticks } from '../../widgets';
import ContactDetails from '../../widgets/ContactDetails';
import SocialButton from '../../widgets/SocialButton';
import styles from "./index.module.css";
/**TODO: Подумать, надо ли разделять на компоненты */
/**TODO: что-то в принципе можно выделить в константы. В том числе и компоненты */
export default function Footer() {
  return (
    <footer
      className={cn(
        styles["footer"],
        "d-flex",
        "flex-row",
        "justify-content-between",
        "align-items-center"
      )}
    >
      <Logo />
      
      <Ticks />
      <ContactDetails />
      <div className={cn(styles["social__content"], "d-flex", "flex-column", "justify-content-center")}>
        <p className={styles["social__paragraph"]}>Мы в соц.сетях</p>
        <div className={cn(styles["social__buttons"], "d-flex", "flex-row", "justify-content-between")}>
          <SocialButton linkUrl={"#"} iconUrl="/icon/inst-icon.png" alt="Инстаграмм"/>
          <SocialButton linkUrl={"#"} iconUrl="/icon/vk-icon.png" alt="Вконтакте"/>
          <SocialButton linkUrl={"#"} iconUrl="/icon/youtube-icon.png" alt="Ютуб"/>
        </div>
      </div>
    </footer>
  );
}
