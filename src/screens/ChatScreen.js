import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listLocations } from '../actions/locationActions';
import {Link} from 'react-router-dom';
import SearchBar from '../components/SearchBar'
import Sidebar from '../components/Sidebar'

export default function ChatScreen() {
    const[sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const locationsList = useSelector((state) => state.locationsList);
    const { locations} = locationsList;
    const dispatch = useDispatch();
    const [image] = useState(process.env.PUBLIC_URL +  '/images/profile.png')


    useEffect(()=>{
      dispatch(listLocations(userInfo));
    },[dispatch, userInfo]);

    return (
        <div style={{ backgroundColor: "#f6f6f6", height: "900px", overflow: "hidden" }}>
          <div>
          <span><i class="fas fa-bars nav-icon" onClick={showSidebar}></i></span>
          <div className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <span className="navbar-toggle"><i class="fas fa-times cross-icon" onClick={showSidebar}></i></span>
            <Sidebar style={{width:"75%"}}/>
          </div>
            <nav className='navigation-bar'>
                <img src='images/logo.png' alt="logo"></img>
            </nav>
            </div>
            <div className='py-1'>
              <SearchBar data={locations}></SearchBar>
            </div>
            <div className='destination-info py-1 px-1' style={{top:"0px", position:"relative", width:"auto"}}>
                <div style={{display: "flex", alignItems:"center", justifyContent:"space-between"}} className='mb-1'>
                    <div style={{display: "flex", alignItems:"center"}}>
                        <img src={image} alt="img" className="expertImage" style={{marginRight:"15px"}}></img>
                        <div>
                            <div className="chat-name"><Link to='/chat/influencer' style={{color:"#000000"}}>Kiran Tej</Link></div>
                            <div className="chat-name" style={{fontSize:"12px"}}>Hello...how are you</div>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection:"column", alignItems:"flex-end"}}>
                        <div className="chat-name" style={{color: "#FC7E00", fontSize:"12px", fontWeight:"700"}}>3 days left</div>
                        <div className="chat-name" style={{fontSize:"10px"}}>7:44 am</div>
                    </div>
                </div>
                <div style={{display: "flex", alignItems:"center", justifyContent:"space-between"}} className='mb-1'>
                    <div style={{display: "flex", alignItems:"center"}}>
                        <img src={image} alt="img" className="expertImage" style={{marginRight:"15px"}}></img>
                        <div>
                            <div className="chat-name"><Link to="/" style={{color:"#000000"}}>Kiran Tej</Link></div>
                            <div className="chat-name" style={{fontSize:"12px"}}>Hello...how are you</div>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection:"column", alignItems:"flex-end"}}>
                        <div className="chat-name" style={{color: "#FC7E00", fontSize:"12px", fontWeight:"700"}}>3 days left</div>
                        <div className="chat-name" style={{fontSize:"10px"}}>7:44 am</div>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                
                  {
                    userInfo?
                    userInfo.data?(
                  <div className="navigation">
                  <Link to={`/saved/${userInfo.data._id}`}><img src={process.env.PUBLIC_URL +  "/images/home.png"} alt="home" className="padding9"></img></Link>
                  <Link to={`/saved/${userInfo.data._id}`}><img src={process.env.PUBLIC_URL +  "/images/like.png"} alt="like" className="padding9"></img></Link>
                  <Link to={`/notifications/${userInfo.data._id}`}><img src={process.env.PUBLIC_URL +  "/images/bell.png"} alt="bell" className="padding9"></img></Link>
                  <Link to={`/chat/${userInfo.data._id}`}><img src={process.env.PUBLIC_URL +  "/images/chat-selected.png"} alt="chat" className='selected'></img></Link>
                  </div>
                  ) : ""
                  : ""
                  }
            </div>
        </div>
    )
}
