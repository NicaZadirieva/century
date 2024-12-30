export interface BelievedUsCompaniesProps {
    images: CompanyImage[];
}

export interface CompanyImage {
    url: string;
    width: number;
    height: number;
    alt: string;
}