import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { signin } from "../actions/userActions";
import {useNavigate} from "react-router-dom";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";

export default function SignInScreen(res) {
    const[mobileNo, setMobile] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();

    // const redirect = '/home';
    // const history = useHistory();
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo, loading, error} = userSignin;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(mobileNo, password));
    };

    useEffect(() => {
        if(userInfo){
            if(userInfo.role==="TRAVELLER" || userInfo.role==="LOCAL"){
                navigate("/home")
            }else{
                navigate(`/home/influencer/${userInfo.data._id}`)
            }
        }
    },[navigate, userInfo]);

    return(
        <div>
            <div  className="center">
                <img src='images/logo2.png' alt='logo2'></img>
            </div>

            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}

            <div class="welcome-text">
                <p style={{fontWeight: "600"}}>Welcome</p>
                <p style={{fontWeight: "500"}}>Log In</p>
            </div>
                <div class="signinform">
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <input type="number" id="mobileNo"  placeholder="Enter Phone Number" required 
                            onChange={ e => setMobile(e.target.value)}></input>
                            <label htmlFor="mobileNo">Enter your registered Phone Number</label>
                        </div>
                        <div className="form-group">
                            <div style={{position: "relative"}}>
                            <input style={{paddingLeft: "2rem"}} type="password" id="password" placeholder="Enter Password" required 
                            onChange={ e => setPassword(e.target.value)}></input>
                            <i className="fas fa-unlock font-icon"></i>
                            </div>
                            <label htmlFor="password">Enter your Password</label>
                        </div>
                        <button type="submit" className="btn" style={{width:"100%", minHeight:"2.5rem"}}>Log In</button>
                    </form>
                </div>
            </div>
    )
}