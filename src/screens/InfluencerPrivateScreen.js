import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { listFixedItinerary } from '../actions/fixedItineraryActions';
import { listTravelexperts } from '../actions/travelexpertsActions';
import InfluencerInfoPopup from '../components/InfluencerInfoPopup';
import Sidebar from '../components/Sidebar';

export default function InfluencerPrivateScreen() {
    const {id} = useParams();
    const [image] = useState(process.env.PUBLIC_URL +  '/images/profile.png');
    const [buttonPopup, setTimedPopup] = useState(false);
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const travelexpertsList = useSelector((state) => state.travelexpertsList);
    const {travelexperts} = travelexpertsList;
    const TravelExpert = travelexperts.find((travelexpert) => travelexpert._id === id);
    console.log(TravelExpert);
    const dispatch = useDispatch();
    const[sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const fixedItineraryList = useSelector((state) => state.fixedItineraryList);
    const {fixedItinerary} = fixedItineraryList;
    console.log(fixedItinerary)

    useEffect(()=>{
        dispatch(listFixedItinerary(userInfo));
    },[dispatch, userInfo]);

    const setTrigger = () => (
        setTimedPopup(true)
    )


    useEffect(()=>{
      dispatch(listTravelexperts(userInfo));
    },[dispatch, userInfo]);
    return (
        <div className='py-1'>
            <div>
          <span><i class="fas fa-bars nav-icon" onClick={showSidebar}></i></span>
            <div className={sidebar ? 'nav-menu active': 'nav-menu'}>
                <span className="navbar-toggle"><i class="fas fa-times cross-icon" onClick={showSidebar}></i></span>
                <Sidebar />
            </div>
            <div className="display-flex">
                <img src={image} alt="hello" className="image" style={{width:"4rem", height:"4rem"}}></img>
                <p className="name-i">{
                    TravelExpert? TravelExpert.name: ""}</p>
                <p className="city">Rohini, Delhi</p>
                <div style={{display: "flex"}}>
                <div className="d-flex-row">
                    <img src={process.env.PUBLIC_URL +  '/images/premium.png'} alt="premium-icon" className="premium-icon"></img>
                    <div className="city" style={{margin:"0"}}>Premium Traveller</div>
                </div>
                <div className='info-icon' onClick={setTrigger}>i</div>
                <InfluencerInfoPopup trigger={buttonPopup} setTrigger={setTimedPopup}></InfluencerInfoPopup>
                </div>
            </div>
            <div className='edit-box'>{TravelExpert? <Link to={`/edit/influencer/${TravelExpert._id}`}>Edit</Link> : "Edit"}<img src="/images/blue-edit.png" alt="edit" style={{marginLeft: "5px"}}></img></div>
            </div>
            <div className="influencer-stuff py-1 px-1">
                <div className="rating-component">
                <p className="heading" style={{fontSize: "0.8rem"}}>Languages Known:</p>
                <p className="city" style={{fontSize: "0.6rem", margin:"0"}}>Hindi, Punjabi, English</p>
                </div>
                <div className="city">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non lectus porta urna venenatis tempus. Adipiscing sLorem ipsum dolor sit amet, consectetur adipiscing elit. Non lectus porta urna venenatis tempus. Adipiscing sLorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </div>
                <div className="connect-icons">
                    <Link to="/"><img src={process.env.PUBLIC_URL +  '/images/insta.png'} alt="insta"></img></Link>
                    <Link to="/"><img src={process.env.PUBLIC_URL +  '/images/youtube.png'} alt="youtube"></img></Link>
                    <Link to="/"><img src={process.env.PUBLIC_URL +  '/images/web.png'} alt="web"></img></Link>
                </div>
                <div>
                    <div class="influencer-travel">
                        <p>My Best Travel Stories</p>
                        <a href="/">View All</a>
                    </div>
                    <div className="city">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non lectus porta urna venenatis tempus. Adipiscing sLorem ipsum dolor sit amet, consectetur adipiscing elit. Non lectus porta urna venenatis tempus. Adipiscing sLorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </div>
                </div>
                <div class="influencer-travel" style={{fontWeight: "400", padding: "0 1rem"}}>
                    <p>Instagram</p>
                    <p>|</p>
                    <p>Trivago</p>
                </div>
                <div class="influencer-travel">
                    <p>Destinations Travelled</p>
                    <a href="/">View All</a>
                </div>
                <div>
                   <img src={process.env.PUBLIC_URL +  '/images/tajmahal.jpg'} alt="img" className="blog-image" style={{width:"60.44px", height:"64px"}}></img>
                   <p class="Name" style={{margin:"0"}}>Rishikesh</p>
                </div>
                <div class="influencer-travel">
                    <p>Fixed Itenaries</p>
                    <a href="/">View All</a>
                </div>
                <div>
                {
                    fixedItinerary?
                    (
                                fixedItinerary.map((fixedIt) => (
                    <div class="d-flex" style={{backgroundColor: "#ffffff", marginBottom: "1rem"}}>
                        <img src={process.env.PUBLIC_URL +  '/images/tajmahal.jpg'} alt="img" className="blog-image"></img>
                        <div style={{marginBottom: "1rem"}}>
                            <Link to={`/wholeitinerary/${fixedIt._id}`} className="dest-name" style={{margin: "0 0 0 0.5rem", color:"#121212"}}>{fixedIt.itineraryName}</Link>
                            <p className="blog-area"><span class="icon"><i class="fas fa-map-marker-alt marker" style={{fontSize:  "0.6rem", paddingRight:"0", margin: "0 0 0 0.5rem"}}></i></span>Uttarakhand</p>
                            <p className="blog-area" style={{fontSize:  "0.6rem", paddingRight:"0", margin: "0 0 0 0.5rem"}}>{fixedIt.noofDays - 1}N/{fixedIt.noofDays}D itinerary</p>
                        </div>
                        <p className='price'>Rs {fixedIt.price}/-</p>
                    </div>
                        ))
                        ) : " "}
                </div>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div className="navigation">
                  <Link to={`/home/influencer/${userInfo.data._id}`}><img src={process.env.PUBLIC_URL +  "/images/home-selected.png"} alt="home" className='selected'></img></Link>
                  <Link to="/meeting"><img src={process.env.PUBLIC_URL +  "/images/calender.png"} alt="calender" className="padding9"></img></Link>
                  <Link to="#"><img src={process.env.PUBLIC_URL +  "/images/bell.png"} alt="bell" className="padding9"></img></Link>
                  <Link to="#"><img src={process.env.PUBLIC_URL +  "/images/chat.png"} alt="chat" className="padding9"></img></Link>
                </div>
                </div>
        </div>
    )
}
