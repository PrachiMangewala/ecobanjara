import React from 'react'
import Location from '../components/location';
import data from '../data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TravelExperts from '../TravelExperts';
import TravelExpert from '../components/TravelExpert';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Sidebar from '../components/Sidebar';
import { listLocals } from '../actions/localsActions';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const[locations, setLocations] = useState([]);
    // const[loading, setLoading] = useState(false);
    const[error, setError] = useState(false);
    const[sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const localsList = useSelector((state) => state.localsList);
    const {loading, locals} = localsList;
    console.log(locals);
    useEffect(()=>{
      dispatch(listLocals(userInfo));
    },[dispatch, userInfo]);

    console.log(loading);

    useEffect(()=>{
        const fetchdata = async() => {
          try{
            // setLoading(true);
            const {data} = await axios.get('https://ecobanjarabackend.herokuapp.com/api/destinations/all', 
            { headers: {
                "x-access-token": `${userInfo.accesstoken}`,
            }});
            // setLoading(false);
            setLocations(data);
          } catch(err){
            setError(err.message);
            // setLoading(false);
          }
        };
        fetchdata();
    });

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
        <div style={{ backgroundColor: "#f6f6f6" }}>  
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
                    {
                        TravelExperts.TravelExp.map((Travelexpert) => (
                            <TravelExpert key={Travelexpert._id} TravelExpert={Travelexpert}></TravelExpert>
                        ))
                    }
                     </Slider>
                </div>
            </div>
            <div>
                <div class="text">
                    <p>Locals</p>
                    <a href="/">View All</a>
                </div>
                <div class="Slide">
                <Slider {...settings2}>
                    {
                        locals.map((local) => (
                            <TravelExpert key={local._id} TravelExpert={local}></TravelExpert>
                        ))
                    }
                     </Slider>
                </div>
            </div>
        </div>
    )
}
