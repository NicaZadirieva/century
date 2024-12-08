
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
      <div className="desk-header-contact desk flex-row justify-content-between">
        <div className="company d-flex flex-row">
          <div className="logo"></div>
          <p className="logo-title">Новый век технологий</p>
        </div>
        <ul className="desk-header-contact-list">
          <li>
            <div className="tick"></div>Капельное орошение
          </li>
          <li>
            <div className="tick"></div>Упаковка для кормовых культур
          </li>
          <li>
            <div className="tick"></div>Упаковка для овощных культур
          </li>
        </ul>
        <div className="info d-flex flex-column">
          <div className="tel-block ">
            <div className="tel">8 800 555-86-88</div>
            <p>Звонок по России - бесплатный</p>
          </div>
          <div className="site-block">
            <div className="site">info@neo-agriservis.ru</div>
            <p>Пн.-Пт.:8:30 - 17:00</p>
          </div>
        </div>
        <div
          /* onClick={showForm} */
          className="btn btn-call d-flex flex-column justify-content-center"
        >
          <div>Заказать звонок</div>
        </div>
      </div>

      <div className="desk-header-menu desk  flex-row">
        <div className="btn-menu d-flex flex-row ">
          <div className="hamburger-menu d-flex flex-column ">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>

          <a href="#">Продукция</a>
        </div>
        <ul className="d-flex flex-row justify-content-between">
          <li>
            <a href="#">Услуги</a>
          </li>
          <li>
            <a href="#">Реализованные проекты</a>
          </li>
          <li>
            <a href="#">Статьи</a>
          </li>
          <li>
            <a href="#">Клиенты</a>
          </li>
          <li>
            <a href="#">О компании</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
        <div className="for_btn">
          <div className="btn-search"></div>
        </div>
      </div>
      <div className="desk-menu desk position-absolute">
        <ul>
          <li>
            <a href="#">Капельное орошение</a>
          </li>
          <li>
            <a href="#">Упаковка для овощных культур</a>
          </li>
          <li>
            <a href="#">Упаковка для кормовых культур</a>
          </li>
        </ul>
      </div>
      <div className="mobile-header mobile flex-row justify-content-around align-items-center">
        <div className="hamburger d-flex flex-column ">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
        <div className="company d-flex flex-row">
          <div className="logo"></div>
          <p>Новый век технологий</p>
        </div>
        <div className="search"></div>
      </div>
      <div className="mobile-header-list mobile">
        <ul className="p-0 m-0">
          <li>
            <a href="#">Капельное орошение</a>
          </li>
          <li>
            <a href="#">Упаковка для овощных культур</a>
          </li>
          <li>
            <a href="#">Упаковка для кормовых культур</a>
          </li>
          <li>
            <a href="#">Услуги</a>
          </li>
          <li>
            <a href="#">Реализованные проекты</a>
          </li>
          <li>
            <a href="#">Статьи</a>
          </li>
          <li>
            <a href="#">Клиенты</a>
          </li>
          <li>
            <a href="#">О компании</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
        <div
          /* onClick={showForm} */
          className="btn btn-call-mobile d-flex flex-column justify-content-center mobile"
        >
          <div>Заказать звонок</div>
        </div>
      </div>

      <div className="trailer position-relative">
        <video
          id="video"
          height="auto"
          muted
          autoPlay={true}
          loop={true}
          preload="auto"
        >
          <source src="./img/video/trailer.mp4"></source>
        </video>
        <div className="info-trailer">
          <h1>Новый век агротехнологий</h1>
          <p>
            Мы создаем и внедряем инновационные технологии интеллектуального
            орошения, повышающие эффективность сельского хозяйства и качество
            агрокультур
          </p>
        </div>
      </div>
    </header>
  );
}
