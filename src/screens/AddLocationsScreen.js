import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { listLocations } from '../actions/locationActions';

export default function AddLocationsScreen() {
    const {id} = useParams();
    const[destinations, setDestinations] = useState([]);
    const[destinationsWhole, setDestinationsWhole] = useState([]);
    const locationsList = useSelector((state) => state.locationsList);
    const {locations} = locationsList;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(listLocations(userInfo));
      },[dispatch, userInfo]);

    const saveLocations = () => {
        navigate(`/itinerary/adddetails/${id}`, {state:{destinations: destinations, destinationsWhole: destinationsWhole}});
    }
  
    const selectedDestinations = (location) => {
        if(destinations.length!==0){
            console.log(location._id);
            const locationindex = destinations.find((destination) => destination === location._id)
            console.log(locationindex);
            if(!locationindex){
                setDestinations([...destinations, location._id]);
                setDestinationsWhole([...destinationsWhole, location])
                console.log(destinations);
            }else{
                const newDestinations = destinations.filter((destination) => destination !== location._id);
                const newDestinationWhole = destinationsWhole.filter((destination) => destination._id !== location._id);
                setDestinations(newDestinations);
                setDestinationsWhole(newDestinationWhole);
            }
        }else{
            console.log(location._id);
            setDestinations([...destinations, location._id]);
            setDestinationsWhole([...destinationsWhole, location]);
        }
    }
    console.log(destinations);
    console.log(destinationsWhole);
    return (
        <div className='py-1'>
            <div className='py-1 px-1' style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                <p><i class="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect' style={{color: "#000000"}}>Add Itineraries</p>
            </div>
            <div style={{backgroundColor: "#EFEFEF"}}>
            <div className='py-2 px-1'>
                <p className="heading-dest" style={{color: "#00365B", margin: "0rem 0 0.5rem 0"}}>Select Locations</p>
                <p className='iten-text'>Select locations for your itinerary</p>
                <p className='iten-text' style={{color: "#989898"}}>(you can select multiple locations for your fixed itinerary)</p>
            </div>
            <div className='location-list px-1 py-1'>
                <div>
                    <input type="text" placeholder="Search for a destination" class="search2"></input>
                    <i class="fas fa-search search-icon2"></i>
                </div>
                <div className='wrap-locs my-1'>
                    {
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
                    }
            </div>
            </div>
            <div className='mx-1'>
                <button className='btn' onClick={saveLocations}>Add Locations</button>
            </div>
            </div>
        </div>
    )
}
