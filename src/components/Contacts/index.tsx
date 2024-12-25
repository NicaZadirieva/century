import cn from 'classnames';
import Button from '../shared/Button';
import IconedButton from '../shared/IconedButton';
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
        /**TODO: возможно придется изменить на фрагмент */
        <div className={styles["contact_with_us"]}>
        <div className={cn("restrict-width", "d-flex", "flex-row")}>
          <div className={styles["text"]}>
            <h2 className={styles["title"]}>{CONTACTS_TITLE}</h2>
            <p>
              {CONTACTS_DESCRIPTION}
            </p>
            <div className={cn(styles["contact-btns"], "d-flex", "flex-row")}>
              <Button onClick={(event: MouseEvent) => {console.log(event)}}> Оставить заявку </Button>
              <div className={styles["container-btn"]}>
                <IconedButton iconUrl="/icon/phone_book-icon.png">Все проекты</IconedButton>
              </div>
            </div>
          </div>
          <div className={cn(styles["img-right-contact"], "desk", "col-xs-12", "col-sm-6")}></div>
        </div>
      </div>
    );
}