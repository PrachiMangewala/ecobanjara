import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';
import {Link} from 'react-router-dom';

export default function ProfileScreen() {
    const[sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [image] = useState(process.env.PUBLIC_URL +  '/images/profile.png');
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    return (
        <div style={{ backgroundColor: "#f6f6f6", height: "900px" }}>
          <div>
          <span><i class="fas fa-bars nav-icon" onClick={showSidebar}></i></span>
          <div className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <span className="navbar-toggle"><i class="fas fa-times cross-icon" onClick={showSidebar}></i></span>
            <Sidebar />
          </div>
            <nav className='navigation-bar'>
                <img src={process.env.PUBLIC_URL +  '/images/logo.png'} alt="logo"></img>
            </nav>
            </div>
            <div className='mx-1 my-1'>
            <div style={{display: "flex", alignItems: "center", justifyContent:"space-between"}}>
            <img src={userInfo? (userInfo.data.profileImg? userInfo.data.profileImg: image) : image} alt="profile" className="image" style={{width:"4rem", height:"4rem"}}></img>
            <div className="mx-1 edit-div"><Link to={`/edit/${userInfo.data._id}`} style={{color: "#00365B", marginRight: "0.25rem", fontSize: "0.9rem", fontWeight: "600"}}>Edit</Link><img src={process.env.PUBLIC_URL +  "/images/edit-2.png"} alt="edit"></img></div>
            </div>
            <div className='my-2'>
                <div className='profile-heading my-1'>Your full name</div>
                <div className='profile-value'>{userInfo.data.name}</div>
            </div>
            <div className='my-2'>
                <div className='profile-heading my-1'>Your Gender</div>
                <div className='profile-value'>{userInfo.data.gender}</div>
            </div>
            <div className='my-2'>
                <div className='profile-heading my-1'>Your E-mail</div>
                <div className='profile-value'>{userInfo.data.email}</div>
            </div>
            <div className='my-2'>
                <div className='profile-heading my-1'>Your phone number</div>
                <div className='profile-value'>{userInfo.data.mobileNo}</div>
            </div>
            </div>

        </div>
    )
}
