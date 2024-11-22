import { BelievedUsCompaniesProps } from './BelievedUsCompanies.props';

export default function BelievedUsCompanies(props: BelievedUsCompaniesProps) {
    const companies = props.images;
    return (
        <>
        <div className="companies d-flex flex-column">
          <h2 className="company-title title">Нам доверяют</h2>
          <div className="btn-more d-flex align-self-md-end align-self-sm-start flex-row ">
            <div className="more-img companies-img"></div>
            <p>Все клиенты</p>
          </div>
        </div>
        <div className="companies-block-img d-flex flex-row flex-wrap justify-content-around">
          {
            companies.map((company, index) => (
                <img alt={company.alt} key={index} src={company.url} width={company.width} height={company.height} />
            ))
          }
        </div>
        </>
    );
    
} 