import { FC, useEffect, useState } from "react";
import { IComments } from "./types";
import { fetchData } from "api/dataAPI";
import Comment from "components/common/comment/Comment";
import styles from "./Comments.module.css";
import Loader from "components/common/loader/Loader";

const Comments: FC = () => {
    const [comments, setComments] = useState<IComments[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchComments = async () => {
            setLoading(true);
            try {
                const data: IComments[] = await fetchData<IComments>('comments', 'limit=20');
                setComments(data);
            } catch (e) {
                console.error('Error fetching comments:', e);
            }
            setLoading(false);
        };
        fetchComments();
    }, []);

    return (
        <div className={styles.commentsContainer}>
            <h2 className={styles.commentsHeading}>Comments</h2>
            {loading ? (
                <Loader />
            ) : (
                <div className={styles.commentList}>
                    {comments.map((comment) => (
                        <Comment key={comment.id} index={comment.id} name={comment.name} email={comment.email} body={comment.body} />
                    ))}
                </div>
            )}
            <div className={styles.backgroundShapes}></div>
        </div>
    );
};

export default Comments;
