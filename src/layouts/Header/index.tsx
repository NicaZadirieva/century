import cn from "classnames";

import { useDispatch } from "react-redux";
import { Trailer } from '../../features';
import {
  sendDataActions
} from "../../store/sendData.slice";
import { appDispatch } from "../../store/store";
import { Button, Logo, MobileMenu, Ticks } from '../../widgets';
import ContactDetails from '../../widgets/ContactDetails';
import Menu from '../../widgets/Menu';
import styles from "./index.module.css";

export default function Header() {
  const dispatch = useDispatch<appDispatch>();
  
  function showForm() {
    dispatch(sendDataActions.showForm());
  }
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
        <Button onClick={() => { showForm(); }}>Заказать звонок</Button>
      </div>

      <Menu />
      {/**TODO: пересмотреть подход после выделения всех mobile-элементов в компоненты */}
      <MobileMenu />

      <Trailer />
    </header>
  );
}
