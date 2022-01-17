import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Popup from '../components/Popup';

export default function OnBoardRoleScreen() {
    const[role, setRole] = useState('');
    const[bool, setBool] = useState(false);
    const [buttonPopup, setTimedPopup] = useState(true);
    const navigate = useNavigate();

    const saveRole = (a) => {
        console.log(a);
        setRole(a);
        setBool(true);
    }

    useEffect(() => {
        if(bool){
            if(role==="INFLUENCER"){
                navigate("/signup/influencer")
            }else{
                navigate(`/signup/${role}`);
            }
        }
    })

    return (
        <div>
            <Popup trigger={buttonPopup} setTrigger={setTimedPopup}></Popup>
            <div className="center">
                <img src='images/logo2.png' alt='logo2'></img>
            </div>
            <div className="mx-1" style={{position: "relative", top:"49px"}}>
            <div className="left-text my-1 ">
                <p style={{fontWeight: "600", fontSize:"1.1rem"}}><span className="l-icon" style={{position: "relative", bottom:"3px"}}><i className="fas fa-map-marker-alt l-icon"></i></span ><span style={{marginLeft:"3px"}}>Welcome</span></p>
                <p style={{fontWeight: "600", fontSize:"0.8rem"}}>Please select what best describes you.</p>
            </div>
            <div className="my-1">
                <button className="btn my-2" style={{width:"100%"}} onClick={() => saveRole('TRAVELLER')}>I am a Traveller</button>
                <h2><span>OR</span></h2>
                <div className="btns">
                    <button className="button" onClick={() => saveRole('INFLUENCER')}><span className="star"><i className="fas fa-star star" style={{padding:"2px"}}></i></span><span style={{marginLeft:"4px"}}>Travel Expert</span></button>
                    {/* <button  className="button" onClick={() => saveRole('LOCAL')}><span><img className="star" src="images/robot.png" alt="robot" style={{padding:"4px"}}></img></span><span style={{marginLeft:"4px"}}>Local Guide</span></button> */}
                </div>
                {/* <button className="button" onClick={() => saveRole('INFLUENCER')}><span className="star"><i className="fas fa-star star" style={{padding:"2px"}}></i></span><span style={{marginLeft:"4px"}}>Travel Expert</span></button> */}
            </div>
            <div className="center-onboard my-1">
                <p className="font-blue">Already have an account?</p>
                <Link to="/signin" className="font-yellow">Log In Here</Link>
            </div>
            </div>
        </div>
    )
}
