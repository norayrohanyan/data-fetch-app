import { FC } from "react";
import { IPostProps } from "./types";
import styles from "./Post.module.css";
import { useAnimation } from "hooks/useAnimation";

const Post: FC<IPostProps> = ({ title, body, index }) => {

    const isVisible = useAnimation(index, 100);

    return (
        <div className={`${styles.post} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{title}</h3>
            </div>
            <p className={styles.body}>{body}</p>
        </div>
    );
}

export default Post;
