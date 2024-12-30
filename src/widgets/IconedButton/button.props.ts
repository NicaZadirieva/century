import { ReactNode } from 'react';
/**
 * Iconed button. Can be linked
 */
export default interface IconedButtonProps {
    children: ReactNode,
    className?: string,
    /**
     * url path for the icon
     */
    iconUrl: string,

    /**
     * Flag to show only on mobile
     * TODO: delete if not used
     */
    showInMobile?: boolean,

    /**
     * Width of the icon in pixels
     */
    iconWidth?: number,

    /**
     * Height of the icon in pixels
     */
    iconHeight?: number,

    /**
     * URL for the button's link
     */
    linkUrl?: string
}