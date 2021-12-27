import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { listFixedItinerary } from '../actions/fixedItineraryActions';
import { listTravelexperts } from '../actions/travelexpertsActions';
import InfluencerInfoPopup from '../components/InfluencerInfoPopup';
import Popup from '../components/Popup';

export default function InfluencerScreen() {
    const {id} = useParams();
    const [image] = useState(process.env.PUBLIC_URL +  '/images/profile.png');
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const [buttonPopup, setTimedPopup] = useState(true);
    const [clickedPopup, setClickedPopup] = useState(false);
    const travelexpertsList = useSelector((state) => state.travelexpertsList);
    const {travelexperts} = travelexpertsList;
    const TravelExpert = travelexperts.find((travelexpert) => travelexpert._id === id);
    const dispatch = useDispatch();
    const fixedItineraryList = useSelector((state) => state.fixedItineraryList);
    const {fixedItinerary} = fixedItineraryList;
    console.log(fixedItinerary)

    useEffect(()=>{
        dispatch(listFixedItinerary(userInfo));
    },[dispatch, userInfo]);

    const setTrigger = () => (
        setClickedPopup(true)
    )

    useEffect(()=>{
      dispatch(listTravelexperts(userInfo));
    },[dispatch, userInfo]);
    return (
        <div>
            <Popup trigger={buttonPopup} setTrigger={setTimedPopup}></Popup>
            <div className="display-flex my-1 mx-1">
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
                <InfluencerInfoPopup trigger={clickedPopup} setTrigger={setClickedPopup}></InfluencerInfoPopup>
                </div>
            </div>
            <div className="influencer-stuff py-1 px-1">
                <div className="rating-component">
                    <p className="heading">Rating:</p>
                    <p className="star-icon"><i class="fas fa-star"></i><span style={{fontWeight: "500", fontSize: "12px", color: "#6F7789", marginLeft: "0.3rem"}}>4.8</span></p>
                    <p className="reviews"><Link to="/" style={{color: "#FC7E00"}}>Reviews</Link></p>
                </div>
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
                <div className="fixed-bar">
                    <div>
                    <p style={{marginBottom:"0.5rem"}}>Plan your trip with me</p>
                    <Link to="/" className="add-new">How it works</Link>
                    </div>
                    <button className="btn" style={{width: "fit-content", position:"relative", left:"42px"}}><Link to={`/connect/${userInfo.data._id}/${id}`} style={{color: "#ffffff"}}>Connect</Link></button>
                </div>
            </div>
        </div>
    )
}
