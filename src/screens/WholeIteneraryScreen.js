import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getsingleFixedItinerary, listFixedItinerary } from '../actions/fixedItineraryActions';

export default function WholeIteneraryScreen() {
    const {id} = useParams();
    const itineraryId = id;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    // const fixedItineraryList = useSelector((state) => state.fixedItineraryList);
    // const {fixedItinerary} = fixedItineraryList;
    // const itinerary = fixedItinerary.find((itinerary) => itinerary._id === id);
    // console.log(itinerary)
    const dispatch = useDispatch();
    // const days = useState(itinerary? Number(itinerary.content.length) : 1);

    useEffect(()=>{
        dispatch(getsingleFixedItinerary(userInfo, itineraryId));
    },[dispatch, userInfo, itineraryId]);

    return (
        <div>
            <div className='py-1 px-1' style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                <p><i class="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect' style={{color: "#000000"}}>Fixed Itinerary</p>
            </div>
            {/* <div className='mx-1'>
            {itinerary?
            itinerary.content.map((schedule) =>(
                    <div key={schedule.day}>
                    <div style={{display:"flex", alignItems:"center", height:"25px"}}>
                        <span className='blue-circle2'><i class="fas fa-check" style={{color: "#ffffff", fontWeight: "500"}}></i></span>
                        <div className='day'>Day {schedule.day}</div>
                    </div>
                    <div style={{display:"flex", alignItems:"center"}}>
                    <div className='blue-side-border2 px-1 py-2' style={{left:"10px"}}>
                        <p className='itinery-name'>The perfect sunrise in paradise</p>
                        <img src="/images/tajmahal.jpg" alt="img" className='image-box'></img>
                        <p className='dest-p'>{schedule.eat}, {schedule.travel}, {schedule.leisure}, {schedule.spot}</p>
                    </div>
                    </div>
                    </div>
                )): ""}
            </div> */}
        </div>
    )
}
