import cn from 'classnames';
import styles from './index.module.css';
export default function Trailer() {
  return (
    <div className={cn(styles["trailer"], "position-relative")}>
      <video
        id="video"
        height="auto"
        muted
        autoPlay={true}
        loop={true}
        preload="auto"
      >
        <source src="/video/trailer.mp4"></source>
      </video>
      <div className={styles["trailer__info"]}>
        <h1>Новый век агротехнологий</h1>
        <p>
          Мы создаем и внедряем инновационные технологии интеллектуального
          орошения, повышающие эффективность сельского хозяйства и качество
          агрокультур
        </p>
      </div>
    </div>
  );
}
