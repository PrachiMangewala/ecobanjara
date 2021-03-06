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
import { listLocations, listPopularLocations } from '../actions/locationActions';
import { listTravelexperts } from '../actions/travelexpertsActions';
import {Link} from 'react-router-dom';
import SearchBar from '../components/SearchBar';

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
    const popularlocationsList = useSelector((state) => state.popularlocationsList);
    const { popularlocations } = popularlocationsList;
    const locationsList = useSelector((state) => state.locationsList);
    const { error, locations} = locationsList;
    const [selected, setSelected] = useState("all");
    useEffect(()=>{
      dispatch(listLocals(userInfo));
    },[dispatch, userInfo]);

    useEffect(()=>{
      dispatch(listLocations(userInfo));
    },[dispatch, userInfo]);

    useEffect(()=>{
      dispatch(listTravelexperts(userInfo));
    },[dispatch, userInfo]);

    useEffect(()=>{
      dispatch(listPopularLocations(userInfo));
    },[dispatch, userInfo]);

    const setChange = (value) => {
      setSelected(value);
    }

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 1,
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
        <div style={{ backgroundColor: "#f6f6f6", height: "900px", overflow: "hidden" }}>  
          <div>
          <span><i className="fas fa-bars nav-icon" onClick={showSidebar}></i></span>
          <div className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <span className="navbar-toggle" style={{width:"80vw", display:"flex", justifyContent:"flex-end"}}><i className="fas fa-times cross-icon" onClick={showSidebar}></i></span>
            <Sidebar />
          </div>
            <nav className='navigation-bar'>
                <img src='images/logo-change.png' alt="logo" style={{width:"100px", marginBottom:"2rem"}}></img>
            </nav>
            </div>
            <div>
              <SearchBar data={locations}></SearchBar>
            </div>
            {/* <div className='search-box'>
                <input type="text" placeholder="Search" className="search"></input>
                <i className="fas fa-search search-icon"></i>
            </div> */}
            <div>
                <div className='my-1' style={{marginBottom:"2rem"}}>
                    <ul className="loc-text">
                        <li className={selected === "all"? "active" : "loc-hover"} onClick={() => setChange("all")}>All</li>
                        <li className={selected === "popular"? "active" : "loc-hover"} onClick={() => setChange("popular")}>Popular</li>
                        <li className={selected === "nearby"? "active" : "loc-hover"} onClick={() => setChange("nearby")}>Nearby</li>
                        <li className={selected === "recommended"? "active" : "loc-hover"} onClick={() => setChange("recommended")}>Recommended</li>
                    </ul>
                </div>
                <div className="Slide" style={{margin:"2rem 0 2rem 1rem"}}>
                {
                error? (<MessageBox>{error}</MessageBox>)
                : 
                ( selected === "all"?
                // {console.log(locations['data'])}
                <Slider {...settings}>
                    {
                          locations.slice(0,5).map((location) => (
                            <Location key={location._id} location={location}></Location>
                        ))
                    }
                    <div>
                    <div className='card my-1' style={{width:"213px"}}>
                      <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:"100%"}}>
                      <Link to="/destinations/all">View All</Link>
                      </div>
                    </div>
                    </div>
                </Slider>
                : selected==="popular"?
                <Slider {...settings}>
                    {
                          popularlocations.slice(0,5).map((location) => (
                            <Location key={location._id} location={location}></Location>
                        ))
                    }
                    <div>
                    <div className='card my-1' style={{width:"213px"}}>
                      <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:"100%"}}>
                      <Link to="/destinations/popular">View All</Link>
                      </div>
                    </div>
                    </div>
                </Slider>
                : ""
              )
              }
                </div>

            </div>
            <div>
                <div className="text">
                    <p>Top Travel Experts</p>
                    <Link to="/travelexperts/rating">View All</Link>
                </div>
                <div className="Slide">
                <Slider {...settings2}>
                    { travelexperts? 
                        travelexperts.map((Travelexpert) => (
                            <TravelExpert key={Travelexpert._id} TravelExpert={Travelexpert}></TravelExpert>
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
