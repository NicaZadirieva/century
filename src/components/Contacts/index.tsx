import cn from 'classnames';
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
        <div className={cn(styles["main-container"], "d-flex", "flex-row")}>
          <div className={styles["text"]}>
            <h2 className={cn(styles["title"], styles["contact_with_us-title"])}>{CONTACTS_TITLE}</h2>
            <p>
              {CONTACTS_DESCRIPTION}
            </p>
            <div className={cn(styles["contact-btns"], "d-flex", "flex-row")}>
              <div
                /*onClick={showForm}*/
                className={cn(styles["btn"], "btn-call-2", "d-flex", "flex-column", "justify-content-center")}
              >
                <div>оставить заявку</div>
              </div>
              <div className={styles["container-btn"]}>
                <div className={cn(styles["btn-more"], "d-flex")}>
                  <div className={cn(styles["more-img"], styles["contact-img"])}></div>
                  <p className={styles["upper-paragraph"]}>Все проекты</p>
                </div>
              </div>
            </div>
          </div>
          <div className={cn(styles["img-right-contact"], "desk", "col-xs-12", "col-sm-6")}></div>
        </div>
      </div>
    );
}