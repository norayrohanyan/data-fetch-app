import { FC, useEffect, useState } from "react";
import { IComments } from "./types";
import { fetchData } from "api/dataAPI";
import Comment from "components/common/comment/Comment";
const Comments: FC = () => {
    const [comments, setComments] = useState<IComments[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchComments = async () => {
            setLoading(true);
            try {
                const data: IComments[] = await fetchData<IComments>('comments', 'limit=20');
                setComments(data);
            } catch(e) {
                console.error('Error fetching comments:', e);
            }
            setLoading(false);
        };
        fetchComments();
    }, [])

    return (
        <div>
            <h2>Comments</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {comments.map((comment) => (
                        <Comment key={comment.id} email={comment.email} name={comment.name} body={comment.body}/>
                    ))}
                </div>
        )}
        </div>
    );
};  

export default Comments;