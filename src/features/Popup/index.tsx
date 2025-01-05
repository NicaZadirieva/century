import { FormEvent, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveData,
  sendDataActions,
  SendDataFields,
} from "../../store/sendData.slice";
import { appDispatch, RootState } from "../../store/store";
import styles from './index.module.css';
export default function Popup() {
  const dispatch = useDispatch<appDispatch>();
  const fio = useSelector((s: RootState) => s.sendData.fio);
  const phone = useSelector((s: RootState) => s.sendData.phone);
  const region = useSelector((s: RootState) => s.sendData.region);
  const message = useSelector((s: RootState) => s.sendData.message);
  const displayed = useSelector((s: RootState) => s.sendData.displayed);

  const onInput = (e: FormEvent, changedField: SendDataFields) => {
    dispatch(
      sendDataActions.setFormData({
        key: changedField,
        value: (e.target as HTMLFormElement).value,
      })
    );
  };

  const onSubmit = () => {
    const dataIsCorrect = fio && phone && region && message;
    console.log("Send data:", { fio, phone, region, message });
    if (dataIsCorrect) {
      dispatch(
        saveData({
          fio,
          phone,
          region,
          message,
        })
      );
      dispatch(sendDataActions.hideForm());
    }

  };

  const onClose = (e: MouseEvent) => {
    dispatch(sendDataActions.hideForm());
    e.preventDefault();
  };

  return (
    <div
      className={styles["popup-container"]}
      style={{ display: displayed ? "block" : "none" }}
    >
      <div className={styles["popup"]}>
        <div
          className={styles["exit"]}
          onClick={(e) => {
            onClose(e);
          }}
        >
          X
        </div>
        <div className={styles["clearfix"]}></div>
        <form
          name="form-contact"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <input
            type="text"
            name="fio"
            required
            placeholder="ФИО"
            onInput={(e) => onInput(e, "fio")}
            value={fio || ""}
          />
          <br />
          <input
            required
            type="text"
            name="telephone"
            placeholder="телефон"
            onInput={(e) => onInput(e, "phone")}
            value={phone || ""}
          />
          <br />
          <label htmlFor="region">Регион:</label>
          <select
            required
            id="region"
            name="region"
            onChange={(e) => {
              onInput(e, "region");
            }}
            value={region || ""}
          >
            <option value={""}>Регион</option>
            <option value="Краснодарский край">Краснодарский край</option>
            <option value="Московская область">Московская область</option>
          </select>
          <br />
          <textarea
            required
            name="textarea"
            onInput={(e) => onInput(e, "message")}
            placeholder="Сообщение"
            value={message || ""}
          ></textarea>

          <button className={styles["btn-contact"]} type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
}
