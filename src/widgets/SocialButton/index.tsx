import styles from './index.module.css';
import SocialButtonProps from './socialButton.props';
export default function SocialButton({ iconUrl, linkUrl, alt} : SocialButtonProps) {
    return (
        <a href={linkUrl} className={styles["social__button"]}>
            <img src={iconUrl} alt={alt} />
        </a>
    );
}