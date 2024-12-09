import cn from 'classnames';
import Advantage from '../../components/Advantage';
import Advantages from '../../components/Advantages';
import Archive from '../../components/Archive';
import Article from '../../components/Article';
import Articles from '../../components/Articles';
import BelievedUsCompanies from '../../components/BelivedUsCompanies';
import CardSite from '../../components/CardSite';
import CardSites from '../../components/CardSites';
import Contacts from '../../components/Contacts';
import NewsItem from '../../components/NewsItem';
import Project from '../../components/Project';
import Projects from '../../components/Projects';
import Review from '../../components/Review';
import Reviews from '../../components/Reviews';
import styles from './index.module.css';

export default function Main() {
  
  return (
    <main>
      <div className={styles["main-container"]}>
        {/**CardSites */}
        <CardSites>
          {/**CardSite */}
          {/**first-p, second-p, third-p */}
          <CardSite
            imgLeft={{
              src: "/icon/drops-icon.png",
              alt: "Капельное орошение",
            }}
            imgRight={{
              src: "/assets/big_field.jpg",
              alt: "Капельное орошение",
            }}
            title="Капельное орошение"
          />

          <CardSite
            imgLeft={{
              src: "/icon/circles-icon.png",
              alt: "Сетка сеновязальная",
            }}
            imgRight={{
              src: "/assets/field_works.JPEG",
              alt: "Сетка сеновязальная",
            }}
            title="Сетка сеновязальная"
          />

          <CardSite
            imgLeft={{
              src: "/icon/wheat-icon.png",
              alt: "Упаковка для овощных культур",
            }}
            imgRight={{
              src: "/assets/thread.JPG",
              alt: "Упаковка для овощных культур",
            }}
            title="Упаковка для овощных культур"
          />
        </CardSites>

        {/**Projects */}
        <Projects>
          {/** TODO: Сделать массив */}
          <div
            className={cn(
              styles["projects-container"],
              "d-flex",
              "order-1",
              "order-md-2"
            )}
          >
            {/** Project */}
            <Project
              image={{
                src: "/assets/cabbages.jpg",
                alt: "Капельный полив салата в ЦФО",
              }}
              description="Капельный полив салата в ЦФО"
              likedCounter={0}
              dislikedCounter={0}
              dateCreated="06.09.2019"
              seenCount={14}
            />
            {/** Project */}
            <Project
              image={{
                src: "/assets/2_rubles.JPG",
                alt: "Капельный полив малины в ЦФО",
              }}
              description="Капельный полив малины в ЦФО"
              likedCounter={0}
              dislikedCounter={0}
              dateCreated="31.05.2019"
              seenCount={50}
            />
            {/** Project */}
            <Project
              image={{
                src: "/assets/carrots.jpg",
                alt: "Капельный полив моркови в Казахстане",
              }}
              description="Капельный полив моркови в Казахстане"
              likedCounter={0}
              dislikedCounter={0}
              dateCreated="30.04.2019"
              seenCount={44}
            />
            {/** Project */}
            <Project
              image={{
                src: "/assets/cabbage.jpg",
                alt: "Капельный полив капусты в ПФО",
              }}
              description="Капельный полив капусты в ПФО"
              likedCounter={0}
              dislikedCounter={0}
              dateCreated="26.04.2019"
              seenCount={34}
            />
          </div>
          {/** Projects maxCounter=4. if maxCounter < length => show this*/}
        </Projects>
        {/**Advantages массив */}
        <div className={styles["advantages"]}>
          <h2 className={cn(styles["adva-title"], styles["title"])}>
            Преимущества компании <br />
            "Новый век агротехнологий"
          </h2>
          <Advantages>
            {/**Advantage */}
            <Advantage
              imagePath="/icon/calendar.png"
              title="Более 20 лет на рынке"
              description="Многолетний опыт производства и доставки, начиная с 1998 года"
            />
            {/**Advantage */}
            <Advantage
              imagePath="/icon/factory-icon.png"
              title="Ведущий отечественный производитель"
              description="Крупнейший отечественный производитель систем капельного
                  орошения NEO-DRIP"
            />
            {/**Advantage */}
            <Advantage
              imagePath="/icon/wheel-icon.png"
              title="Полный сервис"
              description="Мы предоставляем полный сервис по обслуживанию систем
                  капельного орошения"
            />
          </Advantages>
        </div>
        <BelievedUsCompanies
          images={[
            {
              url: "/logo/pokr-logo.jpg",
              alt: "Покр-логотип",
              width: 150,
              height: 147,
            },
            {
              url: "/logo/biruli.gif",
              alt: "Бирули-логотип",
              width: 211,
              height: 211,
            },
            {
              url: "/icon/uzef-icon2.png",
              alt: "Юзефов-логотип",
              width: 330,
              height: 150,
            },
            {
              url: "/logo/slava_potato-icon.jpg",
              alt: "Слава картофелю-логотип",
              width: 250,
              height: 90,
            },
            {
              url: "/logo/putsko-icon.png",
              alt: "Пуцко-логотип",
              width: 250,
              height: 73,
            },
            {
              url: "/logo/samarskie_ovoshi-icon.jpg",
              alt: "Самарские овощи-логотип",
              width: 250,
              height: 148,
            },
            {
              url: "/logo/melenskiy-icon.png",
              alt: "Меленский-логотип",
              width: 195,
              height: 140,
            },
            {
              url: "/logo/latkin-logo.jpg",
              alt: "Меленский-логотип",
              width: 250,
              height: 51,
            },
          ]}
        />
      </div>
      {/** Reviews массив*/}
      <Reviews>
        <Review
          logoImage={{
            src: "/logo/pokr-logo.jpg",
            alt: 'ПСССПК "ЦКП Покровские овощи"',
          }}
          reviewHeader={`ПСССПК "ЦКП
            Покровские овощи"`}
          reviewText='Благодарим ЗАО "Новый век агротехнологий" за взаимовыгодное
                    сотрудничество.'
        />
        {/**TODO: logoImage can be undefined */}
        <Review
          reviewHeader='ООО "Агротех"'
          reviewText='Компания ЗАО "Новый век агротехнологий" уже давно является
                    нашим партнером по поставке упаковочных материалов для
                    овощей'
        />
        <Review
          logoImage={{
            src: "/logo/pokr-logo.jpg",
            alt: 'ПСССПК "ЦКП Покровские овощи"',
          }}
          reviewHeader={`ПСССПК "ЦКП
            Покровские овощи"`}
          reviewText='Благодарим ЗАО "Новый век агротехнологий" за взаимовыгодное
                    сотрудничество.'
        />
      </Reviews>
      {/**Articles */}
      <Articles>
        {/**Article */}
        <Article
          image={{
            src: "/assets/bushes.jpg",
            alt: "Ленты для капельного орошения: виды, особенности, правила выбора",
          }}
          title={`Ленты для капельного орошения: виды, особенности, правила
                  выбора`}
          /**TODO: сделать конфигурируемой длину description */
          description="Капельный полив имеет массу преимуществ: беспе..."
          seenCount={15}
          likedCounter={0}
          dislikedCounter={0}
          dateCreated="03.09.2019"
        />

        {/**Article */}
        <Article
          image={{
            src: "/assets/greenfield.jpg",
            alt: "Организация орошения в питомниках",
          }}
          title={`Организация орошения в питомниках`}
          description="Технология полива культурных растений в питомни..."
          seenCount={12}
          likedCounter={1}
          dislikedCounter={0}
          dateCreated="13.08.2019"
        />

        {/**Article */}
        <Article
          image={{
            src: "/assets/calc.jpg",
            alt: "Методика расчета систем капельного орошения",
          }}
          title={`Методика расчета систем капельного орошения`}
          description="Эффективность функционирования системы капельно..."
          seenCount={21}
          likedCounter={1}
          dislikedCounter={0}
          dateCreated="13.08.2019"
        />
      </Articles>
      {/**Archive массив*/}
      <Archive>
        {/**News */}
        <NewsItem
          day={6}
          month={"сентября"}
          title={`Компания ЗАО "Новый век агротехнологий" впервые примет участие в
                "Дне поля Ставропольского края 2019"`}
          description={`С 19 по 20 сентября 2019 года, на территории выставочного
                комплекса АПК Ставропольского края, пройдет "День поля
                Ставропольского края 2019`}
        />

        {/**News */}
        <NewsItem
          day={6}
          month={"сентября"}
          title={`Компания ЗАО "Новый век агротехнологий" впервые примет участие в
                "Дне поля Ставропольского края 2019"`}
          description={`С 19 по 20 сентября 2019 года, на территории выставочного
                комплекса АПК Ставропольского края, пройдет "День поля
                Ставропольского края 2019`}
        />

        {/**News */}
        <NewsItem
          day={6}
          month={"сентября"}
          title={`Компания ЗАО "Новый век агротехнологий" впервые примет участие в
                "Дне поля Ставропольского края 2019"`}
          description={`С 19 по 20 сентября 2019 года, на территории выставочного
                комплекса АПК Ставропольского края, пройдет "День поля
                Ставропольского края 2019`}
        />

        {/**News */}
        <NewsItem
          day={6}
          month={"сентября"}
          title={`Компания ЗАО "Новый век агротехнологий" впервые примет участие в
                "Дне поля Ставропольского края 2019"`}
          description={`С 19 по 20 сентября 2019 года, на территории выставочного
                комплекса АПК Ставропольского края, пройдет "День поля
                Ставропольского края 2019`}
        />
      </Archive>
      {/**Contacts */}
      <Contacts />
    </main>
  );
}
