import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listJourneys } from '../actions/journeyActions';

export default function OrderScreen() {
    const {id} = useParams();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const journeyList = useSelector((state) => state.journeyList);
    const { journeys } = journeyList;
    const dispatch = useDispatch();
    const journey = journeys.find((journey)=> (journey._id===id));
    console.log(journey);
    const [image] = useState(process.env.PUBLIC_URL + '/images/profile.png')


    useEffect(()=>{
        dispatch(listJourneys(userInfo));
    },[dispatch, userInfo]);
    return ( journey &&
        <div>
            <div style={{borderBottom: "5px solid #efefef", paddingBottom:"5rem" }}>
           <div style={{ display: "flex", alignItems: "center" }} className='py-1 px-1'>
                <p><i className="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect' style={{color: "#000000"}}>Transaction Successful</p>
            </div> 
            <div className='py-1 px-1'>
                <div style={{display:"flex", justifyContent:"space-between", color: "#000000", fontWeight:"600", margin:"0 0 0.5rem 0"}} className='heading'>
                    <div>Order Id:</div>
                    <div>{journey.payment.orderId}</div>
                </div>
                <div style={{display:"flex", justifyContent:"space-between", color: "#000000", fontWeight:"300", margin:"0 0 0.5rem 0"}} className='heading'>
                    <div>Date:</div>
                    <div>{journey.payment.date.slice(0,10)}</div>
                </div>
                <div style={{display:"flex", justifyContent:"space-between", color: "#000000", fontWeight:"300", margin:"0 0 0.5rem 0"}} className='heading'>
                    <div>Type of Itinerary:</div>
                    <div>{
                            journey.fixedItinerary?
                            <div>Fixed Itinerary</div>
                            :
                            <div>Custom Itinerary</div>
                        }
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"space-between", color: "#000000", fontWeight:"300", margin:"0 0 0.5rem 0"}} className='heading'>
                    <div>Duration</div>
                    <div>0-3 Days</div>
                </div>
            </div>
            <div>
            <div className='px-1'>
                <p className='heading-locs mt-2' style={{ fontSize: "14px" }}>Locations</p>
                {/* <div className="location-container">
                        {
                            journey.map((destination) => (
                                <div className="location-box">{destination.address}</div>
                            ))
                        }
                </div> */}
            </div>
                <p className='heading-locs mt-2 mx-1' style={{ fontSize: "14px" }}>Travel Expert:</p>
                <div style={{ display: "flex" }} className='mx-1'>
                    <img className="expertImage" src={image} alt="img"></img>
                    <p className='heading-locs' style={{ fontSize: "14px", fontWeight: "500", marginLeft: "1rem" }}>{journey.influencer ? journey.influencer.name : ""}</p>
                </div>
            </div>
            </div>
            <div className='px-1 py-1'>
                <div style={{display:"flex", justifyContent:"space-between", color: "#000000", fontWeight:"600", margin:"0 0 0.5rem 0"}} className='heading'>Payment Summary</div>
                <div style={{display:"flex", justifyContent:"space-between", color: "#000000", fontWeight:"300", margin:"0 0 1.5rem 0"}} className='heading'>Payment mode: Razorpay</div>
                <div>
                    <div style={{display:"flex", justifyContent:"space-between", fontWeight:"300", margin:"0 0 0.5rem 0"}} className='heading'>
                    <div style={{color:"#4D4D4D"}}>Base amount:</div>
                    <div style={{color:"#868686"}}>INR {journey.payment.amount}</div>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between", color: "#000000", fontWeight:"300", margin:"0 0 0.5rem 0"}} className='heading'>
                    <div style={{color:"#4D4D4D"}}>Service fees:</div>
                    <div style={{color:"#868686"}}>0</div>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between", color: "#000000", fontWeight:"300", margin:"0 0 0.5rem 0"}} className='heading'>
                    <div style={{color:"#4D4D4D"}}>GST:</div>
                    <div style={{color:"#868686"}}>0</div>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between", color: "#000000", fontWeight:"500", margin:"0 0 0.5rem 0"}} className='heading'>
                    <div>Total amount</div>
                    <div className='reviews' style={{color: "#FC7E00", fontSize:"14px", textDecoration:"none", fontWeight:"600"}}>INR {journey.payment.amount}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
