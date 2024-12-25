import { ReactNode } from 'react';

export default interface IconedButtonProps {
    children: ReactNode,
    iconUrl: string,
    className?: string,
    showInMobile?: boolean
}