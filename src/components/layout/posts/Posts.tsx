import { FC, useEffect, useState } from "react";
import { fetchData } from "api/dataAPI";
import { IPosts } from "./types";
import Post from "components/common/post/Post";
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
        <div>
            <h2>Posts</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {posts.map((post) => (
                        <Post key={post.id} title={post.title} body={post.body}/>
                    ))}
                </div>
        )}
        </div>
    );
};

export default Posts;