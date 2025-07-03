import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { Link, Navigate } from "react-router-dom";
import { Button, Result } from "antd";

const PrivateRoute = (props) => {

    const { user } = useContext(AuthContext);

    if (user && user.id) {
        return (
            <>
                {props.children}
            </>
        )
    } else {
        // return (<Navigate to={"/login"} />)
        return (
            <Result
                status="403"
                title="Unauthorized!"
                subTitle={"Bạn cần đăng nhập để truy cập nguồn tài nguyên này!"}
                extra={<Button type="primary"><Link to="/">Back Home</Link></Button>}
            />
        )
    }

}

export default PrivateRoute;