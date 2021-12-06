import React, { useState } from 'react'

export default function SignupScreen() {
    const[mobileNo, setMobile] = useState('');
    return (
        <div>
            <div  className="center">
                <img src='images/logo2.png' alt='logo2'></img>
            </div>
            <div className="mx-1" style={{position: "relative", top:"49px"}}>
            <div className="left-text my-1 ">
                <p style={{fontWeight: "600", fontSize:"1rem"}}>Sign Up with Phone Number</p>
            </div>
            <div class="signinform" style={{margin: "0 0 4rem 0", top: "20px"}}>
                    <form>
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
