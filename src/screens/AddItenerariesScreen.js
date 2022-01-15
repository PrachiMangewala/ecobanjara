import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { getsingleFixedItinerary } from '../actions/fixedItineraryActions';

export default function AddItenerariesScreen() {
    const location = useLocation();
    const [days] = useState(location.state.days);
    const [itineraryId] = useState(location.state.itineraryId);
    const [destinationsWhole] = useState(location.state.destinationsWhole);
    // console.log(itineraryId);
    const singleFixedItinerary = useSelector((state) => state.singleFixedItinerary);
    const { fixedItinerary } = singleFixedItinerary;
    const [length, setLength] = useState(fixedItinerary && fixedItinerary.content? fixedItinerary.content.length : 0);
    console.log(length);
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const n = Number(days);
    const navigate = useNavigate();

    useEffect(()=>{
            if(itineraryId){
                dispatch (getsingleFixedItinerary(userInfo, itineraryId));
            }
    },[dispatch, userInfo, itineraryId]);

    useEffect(() => {
        if(fixedItinerary && fixedItinerary.content){
            setLength(fixedItinerary.content.length);
        }
    },[setLength, fixedItinerary]);

    const showItinerary = () => {
        if(String(length)!==days){
            alert('Please add itinerary for all the days')
        }else{
            navigate(`/itinerary/${itineraryId}`, {state: {fixedItinerary: fixedItinerary, destinationsWhole: destinationsWhole}})
        }
    }
    // console.log(fixedItinerary);
    // console.log(n)
    return (
        <div className='mx-1 my-1'>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <div className='py-1' style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                    <p><i className="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                    <p className='connect' style={{color: "#000000"}}>Add Itineraries</p>
                </div>
                    <p className='heading-dest' style={{color: "#9C9C9C", cursor: "pointer"}} onClick={showItinerary}>Next</p>
                </div>
                {[...Array(n)].map((x,i) =>(
                    <div key={i + 1}>
                    <div style={{display:"flex", alignItems:"center", height:"25px"}}>
                        {
                            length?
                            i < length ?
                            <span className='blue-circle' style={{backgroundColor: "#00365B", display: "flex", alignItems: "center", justifyContent: "center"}}><i class="fas fa-check" style={{color: "#ffffff", fontWeight: "500"}}></i></span>
                            :
                            <span className='blue-circle'></span>
                            : <span className='blue-circle'></span>
                        }
                        <div className='day'>Day {i + 1}</div>
                    </div>
                    <div style={{display:"flex", alignItems:"center"}}>
                    {(i===n-1) ? 
                    <div style={{height: "150px"}}></div>
                    :
                    <div>
                        <div className='blue-side-border'></div>
                    </div>
                    }
                    {
                        length!==undefined?
                        i<length ?
                        <div className='add-new' style={{position:"relative", left:"53px", textDecoration:"underline"}}>Added</div>
                        :
                        <Link to={`/itineraryday/${itineraryId}/${i+1}`} className='add-new' style={{position:"relative", left:"53px", textDecoration:"underline"}}><span><i class="fas fa-plus" style={{marginRight: "0.1rem", fontSize: "0.6rem"}}></i></span>Add Day {i + 1} itenerary</Link>
                        :
                        ""
                    }
                    </div>
                    </div>
                ))}
        </div>
    )
}
