import { Img } from '../CardSite/CardSite.props';

export interface ArticleProps {
    image: Img,
    title: string;
    description: string;
    dateCreated: string;
    seenCount?: number,
    likedCounter?: number,
    dislikedCounter?: number
}