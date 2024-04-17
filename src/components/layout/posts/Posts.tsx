import { FC, useEffect, useState } from "react";
import { fetchData } from "api/dataAPI";
import { IPosts } from "./types";
import Post from "components/common/post/Post";
import styles from "./Posts.module.css"; 
import Loader from "components/common/loader/Loader";

const Posts: FC = () => {
    const [posts, setPosts] = useState<IPosts[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const data: IPosts[] = await fetchData<IPosts>('posts', 'limit=20');
                setPosts(data);
            } catch(e) {
                console.error('Error fetching posts:', e);
            }
            setLoading(false);
        };
        fetchPosts();
    }, []);

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