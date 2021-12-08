import React from 'react';
import {Link} from 'react-router-dom';

export default function OnBoardRoleScreen() {
    return (
        <div>
            <div  className="center">
                <img src='images/logo2.png' alt='logo2'></img>
            </div>
            <div className="mx-1" style={{position: "relative", top:"49px"}}>
            <div className="left-text my-1 ">
                <p style={{fontWeight: "600", fontSize:"1.1rem"}}><span className="l-icon" style={{position: "relative", bottom:"3px"}}><i class="fas fa-map-marker-alt l-icon"></i></span ><span style={{marginLeft:"3px"}}>Welcome</span></p>
                <p style={{fontWeight: "600", fontSize:"0.8rem"}}>Please select what best describes you.</p>
            </div>
            <div className="my-1">
                <Link to ="/signup" className="btn my-2">I am a Traveller</Link>
                <h2><span>OR</span></h2>
                <div className="btns">
                    <Link to ="/signup" className="button"><span className="star"><i className="fas fa-star star" style={{padding:"2px"}}></i></span><span style={{marginLeft:"4px"}}>Travel Expert</span></Link>
                    <Link to ="/signup" className="button"><span><img className="star" src="images/robot.png" alt="robot" style={{padding:"4px"}}></img></span><span style={{marginLeft:"4px"}}>Local Guide</span></Link>
                </div>
            </div>
            <div className="center-onboard my-1">
                <p className="font-blue">Already have an account?</p>
                <Link to="/signin" className="font-yellow">Log In Here</Link>
            </div>
            </div>
        </div>
    )
}
