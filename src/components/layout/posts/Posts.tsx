import Loader from "components/common/loader/Loader";
import Post from "components/common/post/Post";
import { useFetch } from "hooks/useFetch";
import { fetchData } from "api/dataAPI";
import styles from "./Posts.module.css"; 
import { IPosts } from "./types";
import { FC } from "react";

const Posts: FC = () => {
    const { data: posts, isLoading: loading } = useFetch<IPosts[]>(() => fetchData<IPosts>('posts', 'limit=20'));
    return (
        <div className={styles.postsContainer}>
            <h2 className={styles.postsHeading}>Posts</h2>
            {loading ? (
                <Loader />
            ) : (
                <div className={styles.postList}>
                    {posts.map((post) => (
                        <Post key={post.id} index={post.id} title={post.title} body={post.body}/>
                    ))}
                </div>
            )}
            <div className={styles.backgroundShapes}></div>
        </div>
    );
};

export default Posts;