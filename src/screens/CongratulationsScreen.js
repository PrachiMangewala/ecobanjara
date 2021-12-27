import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

export default function CongratulationsScreen() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    return (
        <div className="py-1 px-1">
            <div style={{paddingTop:"100px"}}>
                <img src={process.env.PUBLIC_URL +  "/images/congratulations.png"} alt="congratulations"></img>
                <div style={{paddingTop: "50px", color: "#000000", opacity: "0.6", letterSpacing: "0.2px", fontWeight: "600", textAlign:"center"}}>
                    <div>Your Fixed Itinerary is recorded</div>
                    <div style={{textAlign:"center"}}>Our executive will review it before adding it to your profile</div>
                </div>
                <div className='add-new' style={{fontSize:"20px", paddingTop: "50px", textDecoration:"underline", display:"flex", justifyContent:"center"}}><Link to={`/home/influencer/${userInfo.data._id}`}>Go Back</Link></div>
            </div>
        </div>
    )
}