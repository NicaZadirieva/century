import cn from 'classnames';
import IconedButton from '../shared/IconedButton';
import Title from '../Title';
import { BelievedUsCompaniesProps } from './BelievedUsCompanies.props';
import styles from './index.module.css';
export default function BelievedUsCompanies(props: BelievedUsCompaniesProps) {
    const companies = props.images;
    return (
        <>
        <div className={cn(styles["companies"], "d-flex", "flex-column")}>
          <div className={styles["title-container"]}>
            <Title level={2}>Нам доверяют</Title>
            <IconedButton iconUrl="/icon/message-icon.png">Все клиенты</IconedButton>
          </div>
          </div>

        <div className={cn(styles["companies-block-img"], "d-flex", "flex-row", "flex-wrap", "justify-content-around")}>
          {
            companies.map((company, index) => (
                <img alt={company.alt} key={index} src={company.url} width={company.width} height={company.height} />
            ))
          }
        </div>
        </>
    );
    
} 