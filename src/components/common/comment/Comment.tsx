import { FC } from "react";
import { ICommentProps } from "./type";
import { useAnimation } from "hooks/useAnimation";
import styles from "./Comment.module.css";

const Comment: FC<ICommentProps> = ({ index, name, email, body }) => {

    const isVisible = useAnimation(index, 100);

    return (
        <div className={`${styles.comment} ${isVisible ? styles.visible : ''}`}>
            <h3 className={styles.title}><strong>Name:</strong> {name}</h3>
            <p className={styles.email}><strong>Email:</strong> {email}</p>
            <p className={styles.body}>{body}</p>
        </div>
    );
};

export default Comment;