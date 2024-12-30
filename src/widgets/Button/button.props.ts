import { MouseEventHandler } from 'react';

/**
 * Simple button. No links
 */
export default interface ButtonProps {
    className?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
}