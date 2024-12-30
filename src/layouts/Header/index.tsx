import cn from "classnames";

import { Trailer } from '../../features';
import { Button, Logo, MobileMenu, Ticks } from '../../widgets';
import ContactDetails from '../../widgets/ContactDetails';
import Menu from '../../widgets/Menu';
import styles from "./index.module.css";
export default function Header(/* props: HeaderProps */) {
  // TODO:
  // function showForm() {
  //   props.showForm({
  //     /**Здесь должны быть ref */
  //     form: document.forms["form-contact"],
  //     popup: document.querySelector(".popup"),
  //   });
  // }
  return (
    <header>
      <div
        className={cn(
          styles["header"],
          "desk",
          "d-flex",
          "flex-row",
          "justify-content-between",
          "align-items-center"
        )}
      >
        <Logo />
        <Ticks/>
        <ContactDetails/>
        <Button onClick={() => {}}>Заказать звонок</Button>
      </div>

      <Menu />
      {/**TODO: пересмотреть подход после выделения всех mobile-элементов в компоненты */}
      <MobileMenu />

      <Trailer />
    </header>
  );
}
