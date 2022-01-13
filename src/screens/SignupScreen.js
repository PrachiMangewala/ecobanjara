import React, { useEffect, useState } from 'react'
import { useNavigate, useParams} from "react-router-dom";
import { facebookProvider, googleProvider } from '../config/authMethods';
import socialMediaAuth from '../service/auth';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default function SignupScreen(props) {
    const[mobileNo, setMobile] = useState(null);
    const[name, setName] = useState(null);
    const[email, setEmail] = useState(null);
    const[image, setImage] = useState(null);
    const navigate = useNavigate();
    const {role} = useParams();
    console.log(role);

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     if(mobileNo){
    //         navigate(`/otpscreen/${role}`)
    //     }
    // };
    console.log(mobileNo)

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
            navigate(`/otpscreen/${role}`, {state:{mobileNo: mobileNo}})
            // ...
            }).catch((error) => {
            // Error; SMS not sent
            // ...
            console.log(error);
            });

    }

    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider);
        if(res.user._delegate){
            setMobile(res.user._delegate.phoneNumber);
            setName(res.user._delegate.displayName);
            setEmail(res.user._delegate.email);
            setImage(res.user._delegate.photoURL);
            console.log(mobileNo);
            console.log(name);
            console.log(email);
            console.log(image);
        }
    }

    useEffect(() => {
        if(name && email){
            navigate('/enterdetails', {state:{name: name, mobileNo:mobileNo, email: email, image: image, role: role}})
        }
    })

    return (
        <div>
            <div  className="center">
                <img src={process.env.PUBLIC_URL +  '/images/logo2.png'} alt='logo2'></img>
            </div>
            <div className="mx-1" style={{position: "relative", top:"49px"}}>
            <div className="left-text my-1 ">
                <p style={{fontWeight: "600", fontSize:"1rem"}}>Sign Up with Phone Number</p>
            </div>
            <div className="signinform" style={{margin: "0 0 4rem 0", top: "20px"}}>
                    <form>
                        <div className="form-group">
                            <div id='recaptcha'></div>
                            <input type="number" id="mobileNo"  placeholder="Enter Phone Number" required 
                            onChange={ e => setMobile(e.target.value)}></input>
                            <label htmlFor="mobileNo">Enter your Phone Number</label>
                        </div>
                        <div className="btn" style={{width:"93%", minHeight:"1.75rem"}} onClick={onSignInSubmit}>Next</div>
                    </form>
            </div>
            <h2 style={{color: "#00365B"}}><span>OR SIGN UP USING</span></h2>
            <div style={{display:"flex", flexDirection: "column"}}>
                <button onClick={() => handleOnClick(googleProvider)} className='sign-up-btn'><img src={process.env.PUBLIC_URL +  "/images/google.png"} alt="google" style={{marginRight: "1rem"}}></img>Continue with Google</button>
                <button onClick={() => handleOnClick(facebookProvider)} className='sign-up-btn'><img src={process.env.PUBLIC_URL +  "/images/facebook.png"} alt="facebook" style={{marginRight: "1rem"}}></img>Continue with Facebook</button>
                <button className='sign-up-btn'><img src={process.env.PUBLIC_URL +  "/images/insta3.png"} alt="instagram" style={{marginRight: "1rem"}}></img>Continue with Instagram</button>
            </div>
            </div>
        </div>
    )
}
