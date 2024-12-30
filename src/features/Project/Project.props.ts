import { Img } from '../CardSite/CardSite.props';

export interface ProjectProps extends DivProps {
    /**TODO: вынести Img в shared */
    image: Img,
    description: string,
    seenCount?: number,
    dateCreated: string,
    likedCounter?: number,
    dislikedCounter?: number
}