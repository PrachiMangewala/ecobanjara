import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';

export default function InfluencerDetailsPage3() {
    const {id} = useParams();
    const[destinations, setDestinations] = useState([]);
    const[destinationsWhole, setDestinationsWhole] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // useEffect(()=>{
    //     dispatch(listLocations(userInfo));
    //   },[dispatch, userInfo]);

    // const saveLocations = () => {
    //     navigate(`/itinerary/adddetails/${id}`, {state:{destinations: destinations, destinationsWhole: destinationsWhole}});
    // }
  
    // const selectedDestinations = (location) => {
    //     if(destinations.length!==0){
    //         console.log(location._id);
    //         const locationindex = destinations.find((destination) => destination === location._id)
    //         console.log(locationindex);
    //         if(!locationindex){
    //             setDestinations([...destinations, location._id]);
    //             setDestinationsWhole([...destinationsWhole, location])
    //             console.log(destinations);
    //         }else{
    //             const newDestinations = destinations.filter((destination) => destination !== location._id);
    //             const newDestinationWhole = destinationsWhole.filter((destination) => destination._id !== location._id);
    //             setDestinations(newDestinations);
    //             setDestinationsWhole(newDestinationWhole);
    //         }
    //     }else{
    //         console.log(location._id);
    //         setDestinations([...destinations, location._id]);
    //         setDestinationsWhole([...destinationsWhole, location]);
    //     }
    // }
    console.log(destinations);
    console.log(destinationsWhole);
    return (
        <div className='py-2'>
            <div className='py-1 px-1'>
                <p className='connect py-1' style={{color: "#000000", marginLeft:"0"}}>Add Locations</p>
                <p className='iten-text' style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aenean pellentesque ut sem eu senectus porttitor. Sem nulla ornare nulla pellentesque lacus, nunc.lit. Sed aenean pel</p>
            </div>
            <div>
            <div className='location-list px-1'>
                <div>
                    <input type="text" placeholder="Search for a destination" class="search2"></input>
                    <i class="fas fa-search search-icon2"></i>
                </div>
                <div className='wrap-locs my-1'>
                    {/* {
                        locations.map((location) => (
                            <div className='location-comp'>
                                <div class="container" style={{fontStyle: "normal", fontWeight: "900", fontSize: "12px", display: "flex", alignItems: "center", letterSpacing: "0.03em", color: "#00365B"}}>{location.address}
                                    {(destinations.length===0)? 
                                    (
                                    <span class="checkmark" onClick={() => selectedDestinations(location)}></span>
                                    ):  (destinations.find((destination) => destination === location._id))?
                                    (
                                    <span class="checkmark" style={{backgroundColor: "#00365B", display:"flex", justifyContent: "center", alignItems: "center"}} onClick={() => selectedDestinations(location)}><i class="fas fa-check" style={{color: "#ffffff", fontWeight: "500"}}></i></span>
                                    ):(
                                    <span class="checkmark" onClick={() => selectedDestinations(location)}></span>
                                    )}
                                </div>
                            </div>
                        ))
                    } */}
            </div>
            </div>
            <div className='mx-1'>
                <button className='btn'>Complete your profile</button>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}} className='my-1'>
                    <Link to="/">Previous</Link>
                    <Link to="/">Add Later</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

