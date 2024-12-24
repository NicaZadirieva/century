import cn from 'classnames';
import Paragraph from '../Paragraph';
import { BelievedUsCompaniesProps } from './BelievedUsCompanies.props';
import styles from './index.module.css';
export default function BelievedUsCompanies(props: BelievedUsCompaniesProps) {
    const companies = props.images;
    return (
        <>
        <div className={cn(styles["companies"], "d-flex", "flex-column")}>
          <h2 className={styles["title"]}>Нам доверяют</h2>
          <div className={cn("d-flex", "align-self-md-end", "align-self-sm-start", "flex-row")}>
            <div className={styles["companies-img"]}></div>
            <Paragraph className={styles["paragraph"]}>Все клиенты</Paragraph>
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