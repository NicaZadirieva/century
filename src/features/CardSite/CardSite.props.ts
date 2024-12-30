export interface CardSiteProps {
    /**TODO: перенести на уровень тега img */
    
    /**id of right image */
    imgRight: Img;
    /**id of left image */
    imgLeft: Img;

    /**Description of images */
    title: string;
}

export interface Img {
    src: string;
    alt: string;
}