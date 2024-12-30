import { ReactNode } from 'react';

/**
 * Title util component
 */
export default interface TitleProps {
    children: ReactNode,
    className?: string,
    /**
     * Level for the title element
     * (1 - means h1)
     */
    level?: 1 | 2 | 3 | 4
}