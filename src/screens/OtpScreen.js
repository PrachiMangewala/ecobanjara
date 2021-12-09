import React, { useState } from 'react';
import {useNavigate, useParams} from "react-router-dom";

export default function OtpScreen() {
    const[mobileNo, setMobile] = useState('');
    const {role} = useParams();
    console.log(role);
    const navigate = useNavigate();
    const[otp, setOtp] = useState(new Array(4).fill(""));
    const handleChange = (element, index) => {
        if(isNaN(element.value)) return false;
        setOtp([...otp.map((d, idx) => (idx===index) ? element.value : d )]);

        if(element.nextSibling){
            element.nextSibling.focus()
        }
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        if(mobileNo){
            navigate('/enterdetails', {state:{role: role, mobileNo: mobileNo}})
        }
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
            <div class="signinform" style={{position:"relative", top:"65px"}}>
                <div>
                    <p className="otp-text">Confirm your Phone Number</p>
                </div>
                <div className="form-group">
                    <input type="number" id="mobileNo"  placeholder="Enter Phone Number" required 
                    onChange={ e => setMobile(e.target.value)}></input>
                    <label htmlFor="mobileNo">Enter your Phone Number</label>
                </div>
            </div>
                <div style={{position:"relative", top:"65px"}} className="mx-1">
                <div>
                    <p className="otp-text">Enter OTP</p>
                </div>
                <div>
                    {
                        otp.map((data, index) => {
                            return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                                required
                        ></input>
                        )}
                    )}  
                </div>
                <button type="submit" className="btn" style={{width:"100%", minHeight:"2.5rem"}}>Next</button>
                </div>
                </form>
        </div>
    )
}
