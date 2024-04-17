import { FC } from "react";
import { ICommentProps } from "./type";

const Comment: FC<ICommentProps> = ({name, email, body }) => {
    return (
        <div>
            <h3><strong>Name:</strong> {name}</h3>
            <p><strong>Email:</strong> {email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comment;