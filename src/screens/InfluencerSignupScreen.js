import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function InfluencerSignupScreen() {
    const navigate = useNavigate();

    const movetoInfluencerSignup = () => (
        navigate('/enterdetails/influencer')
    )

    return (
        <div className='py-1'>
            <div  className="center">
                <img src={process.env.PUBLIC_URL +  '/images/logo2.png'} alt='logo2'></img>
            </div>
            <div className="mx-1" style={{position: "relative", top:"49px"}}>
            <div className="left-text">
                <p style={{fontWeight: "600", fontSize:"1.2rem"}}>Sign Up</p>
            </div>
            <div className='social' style={{margin:"2rem 0 3rem 0"}}>
                <img src="/images/insta2.png" alt='insta'></img>
                <div style={{color: "#ffffff", width:"100%", textAlign:"center", cursor:"pointer"}} onClick={movetoInfluencerSignup}>Sign up with Instagram</div>
            </div>
            <hr style={{width:"90%"}}></hr>
            <div className="center-onboard my-2">
                <p style={{color:"#5D6785", fontSize:"1rem"}}>Already have an account?</p>
                <Link to="/signin" className="font-yellow">Log In Here</Link>
            </div>
            </div>
        </div>
    )
}
