import Comment from "components/common/comment/Comment";
import Loader from "components/common/loader/Loader";
import styles from "./Comments.module.css";
import { useFetch } from "hooks/useFetch";
import { fetchData } from "api/dataAPI";
import { IComments } from "./types";
import { FC } from "react";

const Comments: FC = () => {  
    const {data: comments, isLoading: loading} = useFetch<IComments[]>(() => fetchData<IComments>('comments', 'limit=20'));
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
