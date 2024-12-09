import React from "react";

export default function Popup() {
  const onInput = () => {
    // TODO: че это? понять, зачем надо
    /*this.props.changeFields({
      fio: document.forms["form-contact"].elements.fio.value,
      phone: document.forms["form-contact"].elements.telephone.value,
      region: document.forms["form-contact"].elements["select"].value,
      message: document.forms["form-contact"].elements.textarea.value,
    });*/
  };

  const validateForm = () => {
    // TODO: проставить в props
    /*console.log(this.props.current_fio);
      console.log(this.props.current_telephone);
      console.log(this.props.current_region);
      console.log(this.props.current_message);
      if (this.props.current_fio === "") {
        alert("Необходимо ввести фамилию");

        return false;
      }
      if (this.props.current_telephone === "") {
        alert("Необходимо ввести телефон");
        return false;
      }
      if (this.props.current_region === "") {
        alert("Необходимо ввести регион");
        return false;
      }
      if (this.props.current_message === "") {
        alert("Необходимо ввести сообщение");
        return false;
      }
      return true;*/
      return true;
  };
  const onSubmit = (e) => {
    if (validateForm()) {
      /*this.props.sendForm({
        fio: this.props.current_fio,
        telephone: this.props.current_telephone,
        region: this.props.current_region,
        message: this.props.current_message,
      });*/
    }
  };

  const onClose = (e) => {
    /*this.props.hideForm({
      form: document.forms["form-contact"],
      popup: document.querySelector(".popup"),
    });
    e.preventDefault();*/
  };
  return (
    <div className="popup-container">
      <div className="popup">
        <div className="cssload-thecube">
          <div className="cssload-cube cssload-c1"></div>
          <div className="cssload-cube cssload-c2"></div>
          <div className="cssload-cube cssload-c4"></div>
          <div className="cssload-cube cssload-c3"></div>
        </div>
        <div
          className="exit"
          onClick={(e) => {
            this.onClose(e);
          }}
        >
          X
        </div>
        <div className="clearfix"></div>
        <form
          name="form-contact"
          onSubmit={(e) => {
            e.preventDefault();
            this.onSubmit(e);
          }}
        >
          <input
            type="text"
            name="fio"
            placeholder="ФИО"
            onInput={(e) => this.onInput(e)}
          />
          <br />
          <input
            type="text"
            name="telephone"
            placeholder="телефон"
            onInput={(e) => this.onInput(e)}
          />
          <br />
          <select
            name="select"
            onChange={(e) => {
              this.onInput(e);
            }}
          >
            <option selected="selected" value="Регион">
              Регион
            </option>
            <option value="Краснодарский край">Краснодарский край</option>
            <option value="Московская область">Московская область</option>
          </select>
          <br />
          <textarea
            name="textarea"
            onInput={(e) => this.onInput(e)}
            placeholder="Сообщение"
          ></textarea>
          <input className="btn btn-contact" value="Отправить" type="submit" />
        </form>
      </div>
    </div>
  );
}
