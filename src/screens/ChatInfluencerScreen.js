import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function ChatInfluencerScreen() {
    const [image] = useState(process.env.PUBLIC_URL +  '/images/profile.png')

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent:"space-between" }} className="box-shadow py-1 px-1">
                <div style={{ display: "flex", alignItems: "center" }}>
                <p><i class="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <div style={{display:"flex"}}>
                <img src={image} alt="img" className="expertImage" style={{marginRight:"4px", marginLeft:"17px"}}></img>
                <div className='mx-1'>
                    <p className='connect' style={{color: "#000000", margin:"0"}}>Kiran</p>
                    <div className="chat-name" style={{color: "#FC7E00", fontSize:"12px", fontWeight:"500"}}>3 days left</div>
                </div>
                </div>
                </div>
                <div style={{display:"flex", alignItems: "flex-start"}}>
                    <img src={process.env.PUBLIC_URL +  '/images/call.png'} alt="call" className="call-image" style={{marginRight:"10px", backgroundColor:"rgb(242,242,242,1)", padding:"22px", borderRadius:"50%"}}></img>
                    <Link to="/customitinerary"><img src={process.env.PUBLIC_URL +  '/images/itinerary.png'} alt="itinerary"></img></Link>
                </div>
            </div>
        </div>
    )
}
