import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import { signout } from '../actions/userActions';

export default function Sidebar() {
    const [image] = useState(process.env.PUBLIC_URL +  '/images/People.jpg');
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;
    console.log(userInfo);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
        navigate("/signin")
    }

    return (
        <div className="back-blue">   
            {/* <div className="mx-1 edit-div"><img src={process.env.PUBLIC_URL +  "/images/edit.png"} alt="edit"></img><span style={{color: "rgb(255,255,255,1)", marginLeft: "0.25rem"}}>Edit</span></div>         */}
            <div className="user-flex mx-1">
                <div className="form-group">
                    <label htmlFor="image-input"><i className="fas fa-camera camera-icon"  style={{top:"27px", left:"49px"}}></i></label>
                    <img src={image} alt="profile" className="image" style={{width:"4rem", height:"4rem"}}></img>
                    <input className="display" type="file" name="image-upload" id="image-input" accept="image/*"/>
                </div>
                <div>
                    <Link to={`/profilescreen/${userInfo.data._id}`} className="name">{userInfo? userInfo.data.name : ""}</Link>
                    <p className="email">{userInfo? userInfo.data.email : ""}</p>
                </div>
            </div>
            <div className="email" style={{position:"relative", top:"-10%"}}><Link to={`/profilescreen/${userInfo.data._id}`} style={{color:"white", textDecoration:"underline"}}>View Profile</Link></div>
            <div className="list py-1">
               <ul className="my-1">
                   <Link to="/paymenthistory"><img src={process.env.PUBLIC_URL +  "/images/payments.png"} alt="payments"></img>My Payments</Link>
                   <Link to="/"><img src={process.env.PUBLIC_URL +  "/images/travel.png"} alt="travel"></img>Travel History</Link>
                   <Link to={`/saved/${userInfo.data._id}`}><img src={process.env.PUBLIC_URL +  "/images/saved.png"} alt="saved"></img>Saved</Link>
                   <Link to="/"><img src={process.env.PUBLIC_URL +  "/images/refer.png"} alt="refer"></img>Refer a Friend</Link>
                   <Link to="/settings"><img src={process.env.PUBLIC_URL +  "/images/settings.png"} alt="settings"></img>Settings</Link>
                   <Link to="/helpandsupport"><img src={process.env.PUBLIC_URL +  "/images/help.png"} alt="help"></img>Help & Support</Link>
                   <div style={{color: "#FF4040", position: "relative", bottom: "-18px", cursor:"pointer", fontSize:"0.9rem", fontWeight:"900"}} onClick={()=>{signoutHandler()}}><img src={process.env.PUBLIC_URL +  "/images/logout.png"} alt="logout"></img>Log out</div>
               </ul>
            </div>
        </div>
    )
}
