import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { getsavedLocations } from '../actions/locationActions';
import { getsavedTravelExperts } from '../actions/travelexpertsActions';
import Location from '../components/location';
import Sidebar from '../components/Sidebar';
import {Link} from 'react-router-dom';
import { getsavedLocals } from '../actions/localsActions';

export default function SavedEntitiesScreen() {
    const[sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const dispatch = useDispatch();
    const savedLocationsList = useSelector((state) => state.savedLocationsList);
    const {savedlocations} = savedLocationsList;
    const savedTravelExpertsList = useSelector((state) => state.savedTravelExpertsList);
    const {savedTravelexperts} = savedTravelExpertsList;
    const savedLocalsList = useSelector((state) => state.savedLocalsList);
    const {savedLocals} = savedLocalsList;
    console.log(savedLocals);
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const [image] = useState(process.env.PUBLIC_URL +  '/images/profile.png')

    useEffect(()=>{
        dispatch(getsavedLocations(userInfo));
      },[dispatch, userInfo]);

    useEffect(()=>{
        dispatch(getsavedTravelExperts(userInfo));
      },[dispatch, userInfo]);

    useEffect(()=>{
        dispatch(getsavedLocals(userInfo));
      },[dispatch, userInfo]);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div style={{ backgroundColor: "#f6f6f6", height: "900px" }}>
          <div>
          <span><i class="fas fa-bars nav-icon" onClick={showSidebar}></i></span>
          <div className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <span className="navbar-toggle"><i class="fas fa-times cross-icon" onClick={showSidebar}></i></span>
            <Sidebar />
          </div>
            <nav className='navigation-bar'>
                <img src={process.env.PUBLIC_URL +  "/images/logo.png"} alt="logo"></img>
            </nav>
            </div>
            <div>
                <div className='my-1'>
                <p class="text">Saved Locations</p>
                {savedlocations? (
                    savedlocations.length===0? (
                        <div className='dest-p mx-1'>Oops, Nothing in here. You still haven't saved any location.</div>) : (
                <Slider {...settings}>
                    {
                          savedlocations.map((location) => (
                            <Location key={location._id} location={location}></Location>
                        ))
                    }
                </Slider>
                )) : ""}
                </div>
                <div className='my-2 py-1'>
                <p class="text">Saved Travel Experts</p>
                <div>
                    {
                        savedTravelexperts? (
                            savedTravelexperts.length === 0 ?(
                                <div className='dest-p mx-1'>Oops, Nothing in here. You still haven't saved any expert.</div>
                            ) : (
                                <div className='mx-1 my-1'>
                                    {
                                        savedTravelexperts.map((TravelExp, i) => (
                                            <div key={TravelExp._id}>
                                            <div style={{display:"flex"}}>
                                                <img class="expertImage" src={TravelExp.profileImg? TravelExp.profileImg : image} alt={TravelExp.name}></img> 
                                                <div className='mx-1'>
                                                <Link to={`/influencer/${TravelExp._id}`} className="Name">{TravelExp.name}</Link>
                                                <div className="rating-component">
                                                    <p className="star-icon"><i class="fas fa-star"></i><span style={{fontWeight: "500", fontSize: "12px", color: "#6F7789", marginLeft: "0.3rem"}}>{TravelExp.rating}</span></p>
                                                </div>
                                                </div>
                                            </div>
                                            {(i + 1!==savedTravelexperts.length)? (
                                                <div style={{borderBottom: "1px solid #E7E7E7"}}></div>
                                            ) : ""}
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        ) : ""
                    }
                </div>
                </div>
                <div className='pb-5'>
                <p class="text">Saved Locals</p>
                <div>
                    {
                        savedLocals? (
                            savedLocals.length === 0 ?(
                                <div className='dest-p mx-1'>Oops, Nothing in here. You still haven't saved any local.</div>
                            ) : (
                                <div className='mx-1 my-1'>
                                    {
                                        savedLocals.map((TravelExp, i) => (
                                            <div key={TravelExp._id}>
                                            <div style={{display:"flex"}}>
                                                <img class="expertImage" src={TravelExp.profileImg? TravelExp.profileImg : image} alt={TravelExp.name}></img> 
                                                <div className='mx-1'>
                                                <Link to={`/influencer/${TravelExp._id}`} className="Name">{TravelExp.name}</Link>
                                                <div className="rating-component">
                                                    <p className="star-icon"><i class="fas fa-star"></i><span style={{fontWeight: "500", fontSize: "12px", color: "#6F7789", marginLeft: "0.3rem"}}>{TravelExp.rating}</span></p>
                                                </div>
                                                </div>
                                            </div>
                                            {(i + 1!==savedLocals.length)? (
                                                <div style={{borderBottom: "1px solid #E7E7E7"}}></div>
                                            ) : ""}
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        ) : ""
                    }
                </div>
                </div>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div className="navigation">
                  <img src={process.env.PUBLIC_URL +  "/images/home.png"} alt="home" className="padding9"></img>
                  <img src={process.env.PUBLIC_URL +  "/images/like-selected.png"} alt="like" className='selected'></img>
                  <img src={process.env.PUBLIC_URL +  "/images/bell.png"} alt="bell" className="padding9"></img>
                  <img src={process.env.PUBLIC_URL +  "/images/chat.png"} alt="chat" className="padding9"></img>
                </div>
            </div>
        </div>
    )
}
