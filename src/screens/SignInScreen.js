import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { InstaSignin, signin, SocialMediasignin } from "../actions/userActions";
import {useNavigate} from "react-router-dom";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { facebookProvider, googleProvider } from '../config/authMethods';
import socialMediaAuth from '../service/auth';

export default function SignInScreen(res) {
    const[mobileNo, setMobile] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();
    const [state] = useState("SIGNIN")

    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo, loading, error} = userSignin;
    console.log(userInfo);

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(mobileNo, password));
    };

    const onSignInSubmit = () => {
        var recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
        const phoneNumber = '+91' + mobileNo;
        console.log(phoneNumber)
        // const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, recaptcha)
            .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            console.log('OTP has been sent');
            navigate("/signin/otpscreen", {state:{mobileNo: mobileNo}})
            // ...
            }).catch((error) => {
            // Error; SMS not sent
            // ...
            console.log(error);
            });
    }

    // useEffect(() => {
    //     if(userInfo){
    //         if(userInfo.role==="TRAVELLER" || userInfo.role==="LOCAL"){
    //             navigate("/home")
    //         }else if(userInfo.role==="INFLUENCER"){
    //             navigate(`/home/influencer/${userInfo.data._id}`)
    //         }else{
    //             navigate("/admin")
    //         }
    //     }
    // },[navigate, userInfo]);

    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res);
        if(res){
            dispatch(SocialMediasignin(res.user._delegate.accessToken))
        }
    }

    const signinInsta = () => (
        dispatch(InstaSignin(state))
    )

    return(
        <div>
            <div  className="center">
                <img src='images/logo2.png' alt='logo2'></img>
            </div>

            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}

            <div className="welcome-text">
                <p style={{fontWeight: "600"}}>Welcome</p>
                <p style={{fontWeight: "500"}}>Log In</p>
            </div>
                <div className="signinform">
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
                            <div className="add-new mx-1" style={{marginTop:"0.5rem"}} onClick={onSignInSubmit}>Login with OTP</div>
                            <div id="recaptcha"></div>
                        </div>
                        <button type="submit" className="btn" style={{width:"100%", minHeight:"2.5rem"}}>Log In</button>
                    </form>
                    <h2 style={{color: "#00365B"}}><span>OR SIGN UP USING</span></h2>
                    <div style={{display:"flex", flexDirection: "column"}}>
                        <button onClick={() => handleOnClick(googleProvider)} className='sign-up-btn'><img src={process.env.PUBLIC_URL +  "/images/google.png"} alt="google" style={{marginRight: "1rem"}}></img>Continue with Google</button>
                        <button onClick={() => handleOnClick(facebookProvider)} className='sign-up-btn'><img src={process.env.PUBLIC_URL +  "/images/facebook.png"} alt="facebook" style={{marginRight: "1rem"}}></img>Continue with Facebook</button>
                        <button onClick={signinInsta} className='sign-up-btn'><img src={process.env.PUBLIC_URL +  "/images/insta3.png"} alt="instagram" style={{marginRight: "1rem"}}></img>Continue with Instagram</button>
                    </div>
                </div>
            </div>
    )
}