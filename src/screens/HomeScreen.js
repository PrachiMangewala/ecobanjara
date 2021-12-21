import React from 'react'
import Location from '../components/location';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TravelExpert from '../components/TravelExpert';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Sidebar from '../components/Sidebar';
import { listLocals } from '../actions/localsActions';
import { listLocations } from '../actions/locationActions';
import { listTravelexperts } from '../actions/travelexpertsActions';
import {Link} from 'react-router-dom';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const[sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    console.log(userInfo);
    const localsList = useSelector((state) => state.localsList);
    const { locals} = localsList;
    console.log(locals);
    const travelexpertsList = useSelector((state) => state.travelexpertsList);
    const {travelexperts} = travelexpertsList;
    console.log(travelexperts);
    const locationsList = useSelector((state) => state.locationsList);
    const { error, locations} = locationsList;
    useEffect(()=>{
      dispatch(listLocals(userInfo));
    },[dispatch, userInfo]);

    useEffect(()=>{
      dispatch(listLocations(userInfo));
    },[dispatch, userInfo]);

    useEffect(()=>{
      dispatch(listTravelexperts(userInfo));
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
    var settings2 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
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
                <img src='images/logo.png' alt="logo"></img>
            </nav>
            </div>
            <div className='search-box'>
                <input type="text" placeholder="Search" class="search"></input>
                <i class="fas fa-search search-icon"></i>
            </div>
            <div>
                <div>
                    <ul className="loc-text">
                        <li><a href="/" class="active">All</a></li>
                        <li><a href="/" class="loc-hover">Popular</a></li>
                        <li><a href="/" class="loc-hover">Nearby</a></li>
                        <li><a href="/" class="loc-hover">Recommended</a></li>
                    </ul>
                </div>
                <div class="Slide">
                {
                error? (<MessageBox>{error}</MessageBox>)
                : 
                (
                // {console.log(locations['data'])}
                <Slider {...settings}>
                    {
                          locations.map((location) => (
                            <Location key={location._id} location={location}></Location>
                        ))
                    }
                </Slider>
              )
              }
                </div>

            </div>
            <div>
                <div class="text">
                    <p>Top Travel Experts</p>
                    <a href="/">View All</a>
                </div>
                <div class="Slide">
                <Slider {...settings2}>
                    { travelexperts? 
                        travelexperts.map((Travelexpert) => (
                            <TravelExpert key={Travelexpert._id} TravelExpert={Travelexpert}></TravelExpert>
                        )) : ""
                    }
                     </Slider>
                </div>
            </div>
            <div className='pb-5'>
                <div class="text">
                    <p>Locals</p>
                    <a href="/">View All</a>
                </div>
                <div class="Slide">
                <Slider {...settings2}>
                    { locals? 
                        locals.map((local) => (
                            <TravelExpert key={local._id} TravelExpert={local}></TravelExpert>
                        )) : ""
                    }
                     </Slider>
                </div>
              </div> 
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                
                  {
                    userInfo?
                    userInfo.data?(
                  <div className="navigation">
                  <Link to={`/saved/${userInfo.data._id}`}><img src={process.env.PUBLIC_URL +  "/images/home-selected.png"} alt="home" className='selected'></img></Link>
                  <Link to={`/saved/${userInfo.data._id}`}><img src={process.env.PUBLIC_URL +  "/images/like.png"} alt="like" className="padding9"></img></Link>
                  <Link to={`/notifications/${userInfo.data._id}`}><img src={process.env.PUBLIC_URL +  "/images/bell.png"} alt="bell" className="padding9"></img></Link>
                  <Link to={`/chat/${userInfo.data._id}`}><img src={process.env.PUBLIC_URL +  "/images/chat.png"} alt="chat" className="padding9"></img></Link>
                  </div>
                  ) : ""
                  : ""
                  }
                </div>
            </div>
    )
}
