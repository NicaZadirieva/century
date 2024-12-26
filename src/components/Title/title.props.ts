import { ReactNode } from 'react';

export default interface TitleProps {
    children?: ReactNode,
    className?: string,
    level: 1 | 2 | 3 | 4
}