import { ReactNode } from 'react';

export default interface ButtonProps {
    children: ReactNode,
    iconUrl: string,
    className?: string,
    showInMobile?: boolean
}