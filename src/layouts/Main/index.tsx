import Advantage from '../../components/Advantage';
import Article from '../../components/Article';
import BelievedUsCompanies from '../../components/BelivedUsCompanies';
import CardSite from '../../components/CardSite';
import Project from '../../components/Project';
import Review from '../../components/Review';

export default function Main(props) {
  function showForm() {
    props.showForm({
      form: document.forms["form-contact"],
      popup: document.querySelector(".popup"),
    });
  }
  return (
    <main>
      <div className="main-container">
        {/**CardSites */}
        <div className="cards-sites d-flex flex-wrap">
          {/**CardSite */}
          {/**first-p, second-p, third-p */}
          <CardSite imgLeft='drops-left' imgRight='drops'
          title='Капельное орошение'/>
          
          <CardSite imgLeft='setka-left' imgRight='setka'
          title='Сетка сеновязальная'/>

          <CardSite imgLeft='vegetables-left' imgRight='vegetables'
          title='Упаковка для овощных культур'/>
        </div>

        {/**Projects */}
        <div className="projects d-flex flex-column">
          {/**Title */}
          <h2 className="projects-title title">
            Реализованные проекты систем капельного орошения
          </h2>
          {/** TODO: Сделать массив */}
          <div className="projects-container d-flex order-1 order-md-2">
            {/** Project */}
            <Project imageId='salat' description='Капельный полив салата в ЦФО'
            likedCounter={0} dislikedCounter={0} dateCreated='06.09.2019'
            seenCount={14}/>
            {/** Project */}
            <Project imageId='raspberry' description='Капельный полив малины в ЦФО'
            likedCounter={0} dislikedCounter={0} dateCreated='31.05.2019'
            seenCount={50}/>
            {/** Project */}
            <Project imageId='carrot' description='Капельный полив моркови в Казахстане'
            likedCounter={0} dislikedCounter={0} dateCreated='30.04.2019'
            seenCount={44}/>
            {/** Project */}
            <Project imageId='cabbage' description='Капельный полив капусты в ПФО'
            likedCounter={0} dislikedCounter={0} dateCreated='26.04.2019'
            seenCount={34}/>
          </div>
          {/** Projects maxCounter=4. if maxCounter < length => show this*/}
          <div className="btn-more d-flex align-self-md-end align-self-sm-start flex-row order-2 order-md-1">
            <div className="more-img"></div>
            <p>Все проекты</p>
          </div>
        </div>
        {/**Advantages массив */}
        <div className="advantages">
          <h2 className="adva-title title">
            Преимущества компании <br />
            "Новый век агротехнологий"
          </h2>
          <div className="d-flex flex-column flex-lg-row justify-content-between ">
            {/**Advantage */}
            <Advantage imagePath='./img/icon/calendar.png'
            title='Более 20 лет на рынке'
            description='Многолетний опыт производства и доставки, начиная с 1998 года'
            />
            {/**Advantage */}
            <Advantage imagePath='./img/icon/factory-icon.png'
            title='Ведущий отечественный производитель'
            description='Крупнейший отечественный производитель систем капельного
                  орошения NEO-DRIP'
            />
            {/**Advantage */}
            <Advantage imagePath='./img/icon/wheel-icon.png'
            title='Полный сервис'
            description='Мы предоставляем полный сервис по обслуживанию систем
                  капельного орошения'
            />
          </div>
        </div>
        <BelievedUsCompanies images={[
          {
            url: "./img/logo/pokr-logo/logo.jpg",
            alt: "Покр-логотип",
            width: 150,
            height: 147
          },
          {
            url: "./img/logo/biruli.gif",
            alt: "Бирули-логотип",
            width: 211,
            height: 211
          },
          {
            url: "./img/icon/uzef-icon2.png",
            alt: "Юзефов-логотип",
            width: 330,
            height: 150
          },
          {
            url: "./img/logo/slava_potato-icon.jpg",
            alt: "Слава картофелю-логотип",
            width: 250,
            height: 90
          },
          {
            url: "./img/logo/putsko-icon.png",
            alt: "Пуцко-логотип",
            width: 250,
            height: 73
          },
          {
            url: "./img/logo/samarskie_ovoshi-icon.jpg",
            alt: "Самарские овощи-логотип",
            width: 250,
            height: 148
          },
          {
            url: "./img/logo/melenskiy-icon.png",
            alt: "Меленский-логотип",
            width: 195,
            height: 140
          },
          {
            url: "./img/logo/latkin-logo.jpg",
            alt: "Меленский-логотип",
            width: 250,
            height: 51
          }
      ]}/>
      </div>
      {/** Reviews массив*/}
      <div className="reviews">
        <div className="main-container d-flex flex-column">
          <h2 className="reviews-title title">Отзывы наших клиентов</h2>
          <div className="btn-more d-flex align-self-md-end align-self-sm-start flex-row ">
            <div className="more-img companies-img"></div>
            <p>Все отзывы</p>
          </div>

          <div className="reviews-block">
            <Review logoImage='pokr' reviewHeader='ПСССПК "ЦКП"\n"Покровские\nовощи"'
            reviewText='Благодарим ЗАО "Новый век агротехнологий" за взаимовыгодное
                    сотрудничество.'
            />
            {/**TODO: logoImage can be undefined */}
            <Review reviewHeader='ООО "Агротех"'
            reviewText='Компания ЗАО "Новый век агротехнологий" уже давно является
                    нашим партнером по поставке упаковочных материалов для
                    овощей'
            />
            <Review logoImage='pokr' reviewHeader='ПСССПК "ЦКП"\n"Покровские\nовощи"'
            reviewText='Благодарим ЗАО "Новый век агротехнологий" за взаимовыгодное
                    сотрудничество.'
            />
            </div>
        </div>
      </div>
      {/**Articles */}
      <div className="articles">
        <div className="main-container d-flex flex-lg-row flex-column justify-content-between">
          <div className="articles-info d-flex flex-column">
            <h2 className="articles-title title">Статьи</h2>

            <p>
              Здесь будут представлены публикации для сельхозорганизаций и
              фермерских хозяйств {/**if articles length == 0*/}
            </p>
            <div className="desk">
              <div className="btn-more d-flex flex-row ">
                <div className="more-img companies-img"></div>
                <p>Все статьи</p>
              </div>
            </div>
          </div>
          {/**Article */}
          <div className="projects-container d-flex flex-lg-row flex-column">
            <Article imageId={'lenti'} 
            title={`Ленты для капельного орошения: виды, особенности, правила
                  выбора`} 
            description='Капельный полив имеет массу преимуществ: беспе...'
            seenCount={15}
            likedCounter={0}
            dislikedCounter={0}
            dateCreated='03.09.2019'
                  />
            
            {/**Article */}
            <Article imageId={'pitom'} 
            title={`Организация орошения в питомниках`} 
            description='Технология полива культурных растений в питомни...'
            seenCount={12}
            likedCounter={1}
            dislikedCounter={0}
            dateCreated='13.08.2019'
                  />
            
            {/**Article */}
            <Article imageId={'calc'} 
            title={`Методика расчета систем капельного орошения`} 
            description='Эффективность функционирования системы капельно...'
            seenCount={21}
            likedCounter={1}
            dislikedCounter={0}
            dateCreated='13.08.2019'/>

          </div>
        </div>
        <div className="mobile">
          <div className="btn-more d-flex flex-row ">
            <div className="more-img companies-img"></div>
            <p>Все статьи</p>
          </div>
        </div>
      </div>
      {/**Archive массив*/}
      <div className="archive">
        <div className="main-container d-flex flex-column">
          <h2 className="archive-title title">Архив новостей</h2>
          <div className="btn-more d-flex align-self-md-end align-self-sm-start flex-row order-2 order-md-1">
            <div className="more-img calendar-img"></div>
            <p>Все новости</p>
          </div>
          <div className="archives order-1 order-md-2 d-flex flex-lg-row flex-column justify-content-between align-items-center">
            {/**News */}
            <div className="archive-block ">
              <div className="archive-date-month">
                <div className="archive-date">06</div>
                <div className="month">сентября</div>
              </div>
              <p className="title">
                Компания ЗАО "Новый век агротехнологий" впервые примет участие в
                "Дне поля Ставропольского края 2019"{" "}
              </p>
              <p className="archive-about">
                С 19 по 20 сентября 2019 года, на территории выставочного
                комплекса АПК Ставропольского края, пройдет "День поля
                Ставропольского края 2019"
              </p>
              <div className="btn-archive d-flex flex-column justify-content-center">
                <div>Подробнее</div>
              </div>
            </div>
            {/**News */}
            <div className="archive-block ">
              <div className="archive-date-month">
                <div className="archive-date">06</div>
                <div className="month">сентября</div>
              </div>
              <p className="title">
                Компания ЗАО "Новый век агротехнологий" впервые примет участие в
                "Дне поля Ставропольского края 2019"{" "}
              </p>
              <p className="archive-about">
                С 19 по 20 сентября 2019 года, на территории выставочного
                комплекса АПК Ставропольского края, пройдет "День поля
                Ставропольского края 2019"
              </p>
              <div className="btn-archive d-flex flex-column justify-content-center">
                <div>Подробнее</div>
              </div>
            </div>
            {/**News */}
            <div className="archive-block ">
              <div className="archive-date-month">
                <div className="archive-date">06</div>
                <div className="month">сентября</div>
              </div>
              <p className="title">
                Компания ЗАО "Новый век агротехнологий" впервые примет участие в
                "Дне поля Ставропольского края 2019"{" "}
              </p>
              <p className="archive-about">
                С 19 по 20 сентября 2019 года, на территории выставочного
                комплекса АПК Ставропольского края, пройдет "День поля
                Ставропольского края 2019"
              </p>
              <div className="btn-archive d-flex flex-column justify-content-center">
                <div>Подробнее</div>
              </div>
            </div>
            {/**News */}
            <div className="archive-block ">
              <div className="archive-date-month">
                <div className="archive-date">06</div>
                <div className="month">сентября</div>
              </div>
              <p className="title">
                Компания ЗАО "Новый век агротехнологий" впервые примет участие в
                "Дне поля Ставропольского края 2019"{" "}
              </p>
              <p className="archive-about">
                С 19 по 20 сентября 2019 года, на территории выставочного
                комплекса АПК Ставропольского края, пройдет "День поля
                Ставропольского края 2019"
              </p>
              <div className="btn-archive d-flex flex-column justify-content-center">
                <div>Подробнее</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**Contacts */}
      <div className="contact_with_us">
        <div className="main-container d-flex flex-row">
          <div className="text">
            <h2 className="title contact_with_us-title">Связаться с нами</h2>
            <p>
              Если у вас есть вопросы по нашей продукции или вы хотели бы
              оставить свои комментарии или предложения, пожалуйста, свяжитесь с
              нами. Наши специалисты всегда рады ответить на ваши вопросы.
            </p>
            <div className="contact-btns d-flex flex-row">
              <div
                onClick={showForm}
                className="btn btn-call-2 d-flex flex-column justify-content-center"
              >
                <div>оставить заявку</div>
              </div>
              <div className="container-btn">
                <div className="btn-more d-flex">
                  <div className="more-img contact-img "></div>
                  <p>Все проекты</p>
                </div>
              </div>
            </div>
          </div>
          <div className="img-right-contact col-xs-12 col-sm-6 desk"></div>
        </div>
      </div>
    </main>
  );
}
