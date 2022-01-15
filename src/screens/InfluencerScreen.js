import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { removeEntity, saveEntity } from '../actions/saveentitiesActions';
import { getsavedTravelExperts, getTravelExpert } from '../actions/travelexpertsActions';
import FixedItineraryBox from '../components/FixedItineraryBox';
import InfluencerInfoPopup from '../components/InfluencerInfoPopup';
import Popup from '../components/Popup';

export default function InfluencerScreen() {
    const {id} = useParams();
    const influencerId = id;
    const [image] = useState(process.env.PUBLIC_URL +  '/images/profile.png');
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const [buttonPopup, setTimedPopup] = useState(false);
    const [clickedPopup, setClickedPopup] = useState(false);
    const travelExpertInfo = useSelector((state) => state.travelExpertInfo);
    const { travelexpert } = travelExpertInfo;
    const dispatch = useDispatch();
    const savedTravelExpertsList = useSelector((state) => state.savedTravelExpertsList);
    const {savedTravelexperts} = savedTravelExpertsList;

    useEffect(()=>{
        dispatch(getsavedTravelExperts(userInfo));
      },[dispatch, userInfo]);

    useEffect(()=>{
        dispatch(getTravelExpert(influencerId));
    },[dispatch, influencerId]);

    const setTrigger = () => (
        setClickedPopup(true)
    )

    const showPopup = () => (
        setTimedPopup(true)
    )

    const AddToSavedTravelExperts = (expertId) => {
        if(savedTravelexperts){
            const expertindex = savedTravelexperts.find((expert) => expert._id === expertId)
            if(!expertindex){
                dispatch(saveEntity(userInfo, expertId))
                dispatch(getsavedTravelExperts(userInfo));
                alert('This Influencer has been saved.');
                dispatch(getsavedTravelExperts(userInfo));
            }else{
                dispatch(removeEntity(userInfo, expertId));
                dispatch(getsavedTravelExperts(userInfo));
                alert('Influencer removed');
                dispatch(getsavedTravelExperts(userInfo));
            }
        }else{
            alert('Saved influencers list is empty.')
        }
    }

    return (
        <div>
            {
            travelexpert?
            <div>
            <Popup trigger={buttonPopup} setTrigger={setTimedPopup}></Popup>
            {!(savedTravelexperts.find((expert) => expert._id === influencerId)) && <span className="overlay" style={{padding: "6px 8px 6px 8px", left:"84%", backgroundColor:"#efefef"}}  onClick={() => AddToSavedTravelExperts(influencerId)}><i class="fas fa-map-marker-alt loc-icon"></i></span>}
            {(savedTravelexperts.find((expert) => expert._id === influencerId)) && <span className="overlay2" style={{padding: "6px 8px 6px 8px", left:"84%"}}  onClick={() => AddToSavedTravelExperts(influencerId)}><i class="fas fa-map-marker-alt loc-icon"></i></span>}
            <div className="display-flex my-1 mx-1">
                <img src={image} alt="hello" className="image" style={{width:"4rem", height:"4rem"}}></img>
                <p className="name-i">{
                    travelexpert.data? travelexpert.data.name: ""}</p>
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
                <div className="city" style={{margin:"2rem 0"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non lectus porta urna venenatis tempus. Adipiscing sLorem ipsum dolor sit amet, consectetur adipiscing elit. Non lectus porta urna venenatis tempus. Adipiscing sLorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </div>
                <div className="rating-component">
                    <p className="heading" style={{fontSize: "14px"}}>Languages Known:</p>
                    <p className="city" style={{fontSize: "14px", margin:"0"}}>Hindi, Punjabi, English</p>
                </div>
                {/* <div className="connect-icons">
                    <Link to="/"><img src={process.env.PUBLIC_URL +  '/images/insta.png'} alt="insta"></img></Link>
                    <Link to="/"><img src={process.env.PUBLIC_URL +  '/images/youtube.png'} alt="youtube"></img></Link>
                    <Link to="/"><img src={process.env.PUBLIC_URL +  '/images/web.png'} alt="web"></img></Link>
                </div> */}
                <div>
                    <div class="influencer-travel">
                        <p>My Best Travel Story</p>
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
                    <Link to={`/fixeditineraries/${id}`}>View All</Link>
                </div>
                <div className='pb-2'>
                {
                    travelexpert.fixeditinerary?
                    (
                        travelexpert.fixeditinerary.slice(0,2).map((fixedIt) => (
                            <FixedItineraryBox fixedIt={fixedIt}></FixedItineraryBox>
                        ))
                        ) : ""
                }
                </div>
                <div className="rating-component pb-2" style={{justifyContent: "space-between"}}>
                    <div style={{display:"flex"}}>
                    <p className="heading">Rating:</p>
                    <p className="star-icon"><i class="fas fa-star"></i><span style={{fontWeight: "700", fontSize: "12px", color: "#6F7789", marginLeft: "0.3rem"}}>4.8</span></p>
                    </div>
                    <p className="reviews"><Link to="/" style={{color: "#FC7E00"}}>Reviews</Link></p>
                </div>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <div className="location-box" style={{padding:"10px 15px"}}><Link to="/">Youtube</Link></div>
                    <div className="location-box" style={{padding:"10px 15px"}}><Link to="/">Instagram</Link></div>
                </div>
                <div className="fixed-bar">
                    <div>
                    <p style={{marginBottom:"0.5rem"}}>Plan your trip with me</p>
                    <div className="add-new" onClick={showPopup}>How it works</div>
                    </div>
                    <button className="btn" style={{width: "fit-content", position:"relative", left:"42px"}}><Link to={`/connect/${userInfo.data._id}/${id}`} style={{color: "#ffffff"}}>Connect</Link></button>
                </div>
            </div>
            </div>
            :""
            }
        </div>
    )
}
