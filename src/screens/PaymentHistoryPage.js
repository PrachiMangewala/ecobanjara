import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listJourneys } from '../actions/journeyActions';
import {Link} from 'react-router-dom';

export default function PaymentHistoryPage() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const journeyList = useSelector((state) => state.journeyList);
    const { journeys } = journeyList;
    const dispatch = useDispatch();
    console.log(journeys);
    useEffect(()=>{
        dispatch(listJourneys(userInfo));
    },[dispatch, userInfo]);
    return (journeys &&
        <div>
            <div style={{ display: "flex", alignItems: "center" }} className='py-1 px-1'>
                <p><i className="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect' style={{color: "#000000"}}>Payment History</p>
            </div>
            <div style={{backgroundColor:"#E5E5E5"}}>
                {
                    journeys.map((journey)=>(
                        <div style={{backgroundColor:"#FFFFFF", marginBottom:"3px", display:"flex", justifyContent:"space-between", padding:"1rem 1rem 2rem 1rem"}} className='py-1 px-1' key={journey._id}>
                            <div>
                                <div className='heading' style={{color: "#000000", fontWeight:"600"}}>
                                   <Link to={`/order/${journey._id}`}>Order id: {journey.payment.orderId}</Link>
                                </div>
                                <div className='heading' style={{fontWeight:"normal"}}>
                                    {
                                       journey.fixedItinerary?
                                       <div>Fixed Itinerary: Location</div>
                                       :
                                       <div>Custom Itinerary: Location</div>
                                    }
                                </div>
                                <div className='heading' style={{fontWeight:"normal", color:"#A7A7A7"}}>{journey.payment.date.slice(0,10)}</div>
                            </div>
                            <div className="reviews"  style={{color: "#FC7E00", fontSize:"14px", textDecoration:"none", fontWeight:"600"}}>Rs. {journey.payment.amount}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
