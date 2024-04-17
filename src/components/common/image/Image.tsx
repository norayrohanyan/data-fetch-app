import { FC } from "react";
import { IImageProps } from "./type";
import styles from "./Image.module.css";

const Image: FC<IImageProps> = ({ title, url, thumbnailUrl }) => {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.thumbnailContainer}>
        <img src={thumbnailUrl} alt="Thumbnail" className={styles.thumbnail} />
      </div>
      <div className={styles.imageInfo}>
        <img src={url} alt={title} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
};

export default Image;
