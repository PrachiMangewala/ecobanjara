import React from 'react';
import {Link} from 'react-router-dom';

export default function OnBoardingScreen() {
    return (
        <div>
            <div className="center-onboard my-1">
                <img src="images/logo2.png" alt="logo"></img> 
                <img style={{width: "92%"}} src="images/travel.jpg" alt="travel"></img>
            </div>
            <div className="mx-1">
            <div className="left-text">
                <p style={{fontWeight: "600", fontSize:"1.1rem"}}><span className="l-icon" style={{position: "relative", bottom:"3px"}}><i class="fas fa-map-marker-alt l-icon"></i></span ><span style={{marginLeft:"3px"}}>Welcome</span></p>
                <p style={{fontWeight: "600", fontSize:"0.9rem"}}>Welcome to Triponvo leading trip conversations platform.</p>
                <p style={{fontWeight: "500", fontSize:"0.8rem"}}>Loading Trip conversations platform.</p>
            </div>
            <div>
                <Link to="/onboardrole" className="btn" style={{width: "auto"}}>Get Started</Link>
            </div>
            <div className="center-onboard my-1">
                <p className="font-blue">Already have an account?</p>
                <Link to="/signin" className="font-yellow">Log In Here</Link>
            </div>
            </div>
        </div>
    )
}
