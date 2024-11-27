export interface ArticleProps {
    /**TODO: Заменить на pictureUrl */
    imageId: string,
    title: string;
    description: string;
    dateCreated: string;
    seenCount?: number,
    likedCounter?: number,
    dislikedCounter?: number
}