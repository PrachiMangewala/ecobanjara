import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

export default function SettingsPage() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    return (
        <div className='py-1 px-1'>
            <div style={{ display: "flex", alignItems: "center" }}>
                <p><i className="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect' style={{color: "#000000"}}>Settings</p>
            </div> 
            <div className="py-1">
            <ul className="my-1" style={{padding:"0"}}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}} className='py-1'>
                   <div style={{display:"flex", alignItems:"center"}}>
                       <img src={process.env.PUBLIC_URL +  "/images/personal-info.png"} alt="payments" className='settings-image' style={{padding:"6px"}}></img>
                       <Link to={`/profilescreen/${userInfo.data._id}`} className='connect' style={{color: "#000000"}}>Personal Information</Link>
                    </div>
                   <div><Link to={`/profilescreen/${userInfo.data._id}`}><i className="fas fa-chevron-right" style={{ fontSize: "1.2rem" }}></i></Link></div>
                </div>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}} className='py-1'>
                   <div style={{display:"flex", alignItems:"center"}}>
                       <img src={process.env.PUBLIC_URL +  "/images/password.png"} alt="travel" className='settings-image' style={{padding:"6px 8px"}}></img>
                       <Link to="/changepassword" className='connect' style={{color: "#000000"}}>Change Password</Link>
                    </div>
                    <div><Link to="/changepassword"><i className="fas fa-chevron-right" style={{ fontSize: "1.2rem" }}></i></Link></div>
                </div>
               </ul>
            </div>
        </div>
    )
}
