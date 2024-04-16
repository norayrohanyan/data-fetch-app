import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
const A: FC = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    return <div>
            {user?.email}<br/>
            {user?.password}<br/>
        </div>;
};

export default A;