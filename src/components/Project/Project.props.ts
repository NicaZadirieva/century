export interface ProjectProps extends DivProps {
    imageId: string,
    description: string,
    seenCount?: number,
    dateCreated: string,
    likedCounter?: number,
    dislikedCounter?: number
}