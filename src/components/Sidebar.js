import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import { signout } from '../actions/userActions';

export default function Sidebar() {
    const[bool,setBool] = useState(false)
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;
    console.log(userInfo);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
        setBool(true);
    }

    useEffect(() => {
        if(bool){
            navigate("/")
        }
    })

    return (
        <div className="back-blue">   
            <div className="mx-1 edit-div"><img src="images/edit.png" alt="edit"></img><span style={{color: "rgb(255,255,255,1)", marginLeft: "0.25rem"}}>Edit</span></div>        
            <div className="user-flex mx-1">
                <div className="form-group">
                    <label htmlFor="image-input"><i class="fas fa-camera camera-icon"  style={{top:"27px", left:"49px"}}></i></label>
                    <img src="images/profile.png" alt="profile" className="image" style={{width:"4rem", height:"4rem"}}></img>
                    <input className="display" type="file" name="image-upload" id="image-input" accept="image/*"/>
                </div>
                <div>
                    <p className="name">{userInfo.data.name}</p>
                    <p className="email">{userInfo.data.email}</p>
                </div>
            </div>
            <div className="list py-1">
               <ul className="my-1">
                   <Link to="/"><img src="images/payments.png" alt="payments"></img>My Payments</Link>
                   <Link to="/"><img src="images/travel.png" alt="travel"></img>Travel History</Link>
                   <Link to="/"><img src="images/saved.png" alt="saved"></img>Saved</Link>
                   <Link to="/"><img src="images/refer.png" alt="refer"></img>Refer a Friend</Link>
                   <Link to="/"><img src="images/settings.png" alt="settings"></img>Settings</Link>
                   <Link to="/"><img src="images/help.png" alt="help"></img>Help & Support</Link>
                   <Link to="#signout" style={{color: "#FF4040", position: "relative", bottom: "-18px"}} onClick={()=>{signoutHandler()}}><img src="images/logout.png" alt="logout"></img>Log out</Link>
               </ul>
            </div>
        </div>
    )
}
