import cn from 'classnames';
import Button from '../shared/Button';
import IconedButton from '../shared/IconedButton';
import Title from '../Title';
import styles from './index.module.css';
const CONTACTS_TITLE = 'Связаться с нами';
const CONTACTS_DESCRIPTION = `Если у вас есть вопросы по нашей продукции или вы хотели бы
              оставить свои комментарии или предложения, пожалуйста, свяжитесь с
              нами. Наши специалисты всегда рады ответить на ваши вопросы.`;

export default function Contacts() {
    /* TODO: добавить отображение формы
    function showForm() {
    props.showForm({
      form: document.forms["form-contact"],
      popup: document.querySelector(".popup"),
    });
  }*/
    return (
      <section className={cn(styles["contact-with-us"], "restrict-width", "d-flex", "flex-row")}>
          <div className={cn(styles["contact-with-us__content"], "d-flex", "flex-column")}>
            <Title level={2} className={styles["contact-with-us__title"]}>{CONTACTS_TITLE}</Title>
            <p>{CONTACTS_DESCRIPTION}</p>
            <div className={cn(styles["contact-with-us__btns"], "d-flex", "flex-row", "align-items-center")}>
              <Button
                onClick={(event: MouseEvent) => {
                  console.log(event);
                }}
              >
                Оставить заявку
              </Button>
                <IconedButton linkUrl={'#'} iconUrl="/icon/phone_book-icon.png">
                  Все проекты
                </IconedButton>

            </div>
          </div>
          <div
            className={cn(
              styles["contact-with-us__image"],
              "desk",
              "col-xs-12",
              "col-sm-6"
            )}
          ></div>

      </section>
    );
}