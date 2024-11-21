import React from "react";

/**Перенести на уровень страницы. Это не компонент утильный. Встречается 1 раз. */
export default function About(props) {
  return (
    <div className="about d-flex flex-row justify-content-between">
      <p>
        © 1998-2019 Все права защищены владельцами торговой марки <br /> ЗАО
        "Новый век агротехнологий"
      </p>
      <div>
        <a hreg="#">Положение о защите персональных данных</a>
        <p>Разработка сайта - drupal-coder.ru</p>
      </div>
    </div>
  );
}
