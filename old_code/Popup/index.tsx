import React, { FormEvent } from "react";

export default function Popup({ sendForm } : {sendForm: ({fio, phone, region, message}) => void }) {
  const [fio, setFio] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [region, setRegion] = React.useState("");
  const [message, setMessage] = React.useState("");
  /**TODO: вот эту переменную можно в redux */
  const [displayed, setDisplayed] = React.useState(false);

  const onInput = (e: FormEvent, changedField: string) => {
    switch (changedField) {
      case "fio":
        setFio((e.target as HTMLInputElement).value);
        break;
      case "telephone":
        setPhone((e.target as HTMLInputElement).value);
        break;
      case "region":
        setRegion((e.target as HTMLSelectElement).value);
        break;
      case "message":
        setMessage((e.target as HTMLTextAreaElement).value);
        break;
    }
  };

  const onSubmit = () => {
      sendForm({
        fio,
        phone,
        region,
        message,
      });
  };

  const onClose = (e) => {
    setDisplayed(false);
    e.preventDefault();
  };

  return (
    <div className="popup-container" style={{display: displayed ? "block" : "none"}}>
      <div className="popup">
        <div
          className="exit"
          onClick={(e) => {
            onClose(e);
          }}
        >
          X
        </div>
        <div className="clearfix"></div>
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
            onInput={(e) => onInput(e, 'fio')}
            value={fio}
          />
          <br />
          <input
            required
            type="text"
            name="telephone"
            placeholder="телефон"
            onInput={(e) => onInput(e, 'telephone')}
            value={phone}
          />
          <br />
          <label htmlFor="region">Регион:</label>
          <select
            required
            id="region"
            name="region"
            onChange={(e) => {
              onInput(e, 'region');
            }}
            value={region}
          >
            <option value="Краснодарский край">Краснодарский край</option>
            <option value="Московская область">Московская область</option>
          </select>
          <br />
          <textarea
            required
            name="textarea"
            onInput={(e) => onInput(e, 'message')}
            placeholder="Сообщение"
            value={message}
          ></textarea>

          <input className="btn btn-contact" value="Отправить" type="submit" />
        </form>
      </div>
    </div>
  );
}
