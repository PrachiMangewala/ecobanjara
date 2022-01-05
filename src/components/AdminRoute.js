import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoute() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    console.log(userInfo.role);
    return(
        userInfo.role === "ADMIN"? <Outlet /> : <Navigate to="/admin"/>
    );
}