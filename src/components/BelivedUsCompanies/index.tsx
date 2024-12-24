import cn from 'classnames';
import Button from '../shared/button';
import { BelievedUsCompaniesProps } from './BelievedUsCompanies.props';
import styles from './index.module.css';
export default function BelievedUsCompanies(props: BelievedUsCompaniesProps) {
    const companies = props.images;
    return (
        <>
        <div className={cn(styles["companies"], "d-flex", "flex-column")}>
          <div className={styles["title-container"]}>
            <h2 className={styles["title"]}>Нам доверяют</h2>
            <Button iconUrl="/icon/message-icon.png">Все клиенты</Button>
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