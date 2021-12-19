import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function TravelExpertRoute() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    console.log(userInfo.role);
    return(
        userInfo.role === "INFLUENCER"? <Outlet /> : <Navigate to="/signin"/>
    );
}