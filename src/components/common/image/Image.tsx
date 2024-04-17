import { FC } from "react";
import { IImageProps } from "./type";
import styles from "./Image.module.css";
import { useAnimation } from "hooks/useAnimation";

const Image: FC<IImageProps> = ({ index, title, url, thumbnailUrl }) => {

  const isVisible = useAnimation(index, 100);

  return (
    <div className={`${styles.imageContainer} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.thumbnailContainer}>
        <img src={thumbnailUrl} alt="Thumbnail" className={styles.thumbnail} />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.fullImageContainer}>
        <img src={url} alt={title} className={styles.fullImage} />
      </div>
    </div>
  );
};

export default Image;
