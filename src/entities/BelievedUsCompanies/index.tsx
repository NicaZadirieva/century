import cn from 'classnames';
import { IconedButton, Title } from '../../widgets';
import { BelievedUsCompaniesProps } from './BelievedUsCompanies.props';
import styles from './index.module.css';
export default function BelievedUsCompanies(props: BelievedUsCompaniesProps) {
    const companies = props.images;
    return (
        <>
        <div className={cn(styles["companies"], "d-flex", "flex-column", "content")}>
          <div className={cn(styles["title-container"])}>
            <Title level={2}>Нам доверяют</Title>
            <IconedButton className={styles["title__btn"]} linkUrl={'#'} iconUrl="/icon/message-icon.png">Все клиенты</IconedButton>
          </div>
          </div>

        <div className={cn(styles["companies-block-img"], "content", "d-flex", "flex-row", "flex-wrap", "justify-content-around")}>
          {
            companies.map((company, index) => (
                <img alt={company.alt} key={index} src={company.url} width={company.width} height={company.height} />
            ))
          }
        </div>
        </>
    );
    
} 