import React, { useState } from 'react'
import {useLocation, useNavigate, useParams} from "react-router-dom";

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
            </div>
        </div>
    )
}
