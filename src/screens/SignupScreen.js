import React, { useState } from 'react'
import { useNavigate, useParams} from "react-router-dom";
import { facebookProvider, googleProvider } from '../config/authMethods';
import socialMediaAuth from '../service/auth';

export default function SignupScreen(props) {
    const[mobileNo, setMobile] = useState('');
    const navigate = useNavigate();
    const {role} = useParams();
    console.log(role);

    const submitHandler = (e) => {
        e.preventDefault();
        if(mobileNo){
            navigate(`/otpscreen/${role}`)
        }
    };

    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res);
    }

    return (
        <div>
            <div  className="center">
                <img src={process.env.PUBLIC_URL +  '/images/logo2.png'} alt='logo2'></img>
            </div>
            <div className="mx-1" style={{position: "relative", top:"49px"}}>
            <div className="left-text my-1 ">
                <p style={{fontWeight: "600", fontSize:"1rem"}}>Sign Up with Phone Number</p>
            </div>
            <div class="signinform" style={{margin: "0 0 4rem 0", top: "20px"}}>
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <input type="number" id="mobileNo"  placeholder="Enter Phone Number" required 
                            onChange={ e => setMobile(e.target.value)}></input>
                            <label htmlFor="mobileNo">Enter your Phone Number</label>
                        </div>
                        <button type="submit" className="btn" style={{width:"100%", minHeight:"2.5rem"}}>Next</button>
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
