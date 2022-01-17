// import React, { useState } from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getItineraryPrice } from '../actions/fixedItineraryActions';
import { listLocations } from '../actions/locationActions';
// import LocationBox from '../components/LocationBox';
// import SearchLocations from '../components/SearchLocations';



export default function ConnectScreen() {
    // const[bool, setBool] = useState(false);
    // function disappearIcon() {
    //     const elms = document.getElementsByClassName('plus');

    //     for (var i=0; i<elms.length; i+=1){
    //         elms[i].style.display = 'none';
    //     }
    // }
    const[filteredData, setFilteredData] = useState([]);
    const[wordEntered, setWordEntered] = useState("");
    const[trip, setTrip] = useState("");
    const[destinations, setDestinations] = useState([]);
    const[destinationsWhole, setDestinationsWhole] = useState([]);
    const locationsList = useSelector((state) => state.locationsList);
    const {locations} = locationsList;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const {influencer} = useParams();
    const ItineraryPrice = useSelector((state) => state.ItineraryPrice);
    const { price } = ItineraryPrice; 
    const userId = influencer;
    const type = "CUSTOM"
    console.log(price);


    useEffect(()=>{
        dispatch(listLocations(userInfo));
      },[dispatch, userInfo]);

      useEffect(()=>{
        if(userInfo && userId && destinations && trip && type){
        dispatch(getItineraryPrice(userInfo, userId, destinations, trip, type));
    }},[dispatch, userInfo, userId, destinations, trip, type]);

    const saveLocations = () => {
        navigate(`/checkout/${userInfo.data._id}`, {state:{destinations: destinations, destinationsWhole: destinationsWhole, trip: trip, price: price, userId: userId, type:type}});
    }

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = locations.filter((value) => {
            return value.city.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord === ""){
            setFilteredData([])
        }else{
            setFilteredData(newFilter);
        }
    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
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

    useEffect(()=>{
        dispatch(listLocations(userInfo));
      },[dispatch, userInfo]);

    return (
        <div className='py-1 px-1' style={{marginBottom: "1rem"}}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <p><i class="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect'>Connect</p>
            </div>
            <div>
            <p className='heading-locs' style={{marginBottom:"2rem"}}>Add Locations</p>
                <div>
                <div>
            <div className='search-box my-1' style={{marginBottom:"2rem"}}>
            <input type="text" placeholder="Search for a location" className='search' value={wordEntered} onChange={handleFilter} style={{width:"100%"}}></input>
            {filteredData.length === 0 ?
               <i class="fas fa-search search-icon"></i>
               :
               <i class="fas fa-times search-icon" onClick={clearInput}></i>
            }
            </div>
            {filteredData.length!==0? (
            <div>
                    <div className='py-1'>
                    <div class="text">
                    <p style={{margin:"0"}}>Search Results</p>
                    </div>
                    <div>
                    {
                    filteredData.slice(0,5).map((value, key) => {
                        return(
                            <div className='location-comp'>
                        <div className="container" style={{fontStyle: "normal", fontWeight: "900", fontSize: "12px", display: "flex", alignItems: "center", letterSpacing: "0.03em", color: "#00365B"}}>{value.address}
                            {(destinations.length===0)? 
                            (
                            <span className="checkmark" onClick={() => selectedDestinations(value)} style={{backgroundColor: "#00365B", display:"flex", justifyContent: "center", alignItems: "center"}}><i class="fas fa-plus plus"></i></span>
                            ):  (destinations.find((destination) => destination === value._id))?
                            (
                            <span className="checkmark" style={{backgroundColor: "#00365B", display:"flex", justifyContent: "center", alignItems: "center"}} onClick={() => selectedDestinations(value)}><i class="fas fa-check" style={{color: "#ffffff", fontWeight: "500"}}></i></span>
                            ):(
                            <span className="checkmark" onClick={() => selectedDestinations(value)} style={{backgroundColor: "#00365B", display:"flex", justifyContent: "center", alignItems: "center"}}><i class="fas fa-plus plus"></i></span>
                            )}
                        </div>
                    </div>
                        )
                    })
                }
                </div>
                </div>
            </div>
            ): <div className='wrap-locs my-1'>
            {
                locations.slice(0,5).map((location) => (
                    <div className='location-comp'>
                        <div className="container" style={{fontStyle: "normal", fontWeight: "900", fontSize: "12px", display: "flex", alignItems: "center", letterSpacing: "0.03em", color: "#00365B"}}>{location.address}
                            {(destinations.length===0)? 
                            (
                            <span className="checkmark" onClick={() => selectedDestinations(location)} style={{backgroundColor: "#00365B", display:"flex", justifyContent: "center", alignItems: "center"}}><i class="fas fa-plus plus"></i></span>
                            ):  (destinations.find((destination) => destination === location._id))?
                            (
                            <span className="checkmark" style={{backgroundColor: "#00365B", display:"flex", justifyContent: "center", alignItems: "center"}} onClick={() => selectedDestinations(location)}><i class="fas fa-check" style={{color: "#ffffff", fontWeight: "500"}}></i></span>
                            ):(
                            <span className="checkmark" onClick={() => selectedDestinations(location)} style={{backgroundColor: "#00365B", display:"flex", justifyContent: "center", alignItems: "center"}}><i class="fas fa-plus plus"></i></span>
                            )}
                        </div>
                    </div>
                ))
            }
    </div>}
        </div>
                </div>
                {/* <div className='wrap-locs my-1'>
                    {
                        locations.slice(0,5).map((location) => (
                            <div className='location-comp'>
                                <div className="container" style={{fontStyle: "normal", fontWeight: "900", fontSize: "12px", display: "flex", alignItems: "center", letterSpacing: "0.03em", color: "#00365B"}}>{location.address}
                                    {(destinations.length===0)? 
                                    (
                                    <span className="checkmark" onClick={() => selectedDestinations(location)} style={{backgroundColor: "#00365B", display:"flex", justifyContent: "center", alignItems: "center"}}><i class="fas fa-plus plus"></i></span>
                                    ):  (destinations.find((destination) => destination === location._id))?
                                    (
                                    <span className="checkmark" style={{backgroundColor: "#00365B", display:"flex", justifyContent: "center", alignItems: "center"}} onClick={() => selectedDestinations(location)}><i class="fas fa-check" style={{color: "#ffffff", fontWeight: "500"}}></i></span>
                                    ):(
                                    <span className="checkmark" onClick={() => selectedDestinations(location)} style={{backgroundColor: "#00365B", display:"flex", justifyContent: "center", alignItems: "center"}}><i class="fas fa-plus plus"></i></span>
                                    )}
                                </div>
                            </div>
                        ))
                    }
            </div> */}
            </div>
            <div style={{marginBottom: "2rem"}}>
                <p className='heading-locs'>Timeline</p>
                <div>
                    <form>
                        <label class="container">0-3 Days
                            <input type="radio" name="radio-button" value="0-3" onChange={ e => setTrip(e.target.value)}/>
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">4-7 Days
                            <input type="radio" name="radio-button" value="4-7" onChange={ e => setTrip(e.target.value)}/>
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">8-10 Days
                            <input type="radio" name="radio-button" value="8-10" onChange={ e => setTrip(e.target.value)}/>
                            <span class="checkmark"></span>
                        </label>

                        <label class="container">11-15 Days
                            <input type="radio" name="radio-button" value="11-15" onChange={ e => setTrip(e.target.value)}/>
                            <span class="checkmark"></span>
                        </label>
                    </form>
                </div>
            </div>
            <div>
                <p className='heading-locs' style={{justifyContent: "center"}}>Check call availaibility<span style={{marginLeft: "0.5rem", cursor: "pointer"}}>^</span></p>
                {price?
                    <button type="submit" className="btn" style={{ marginBottom: "1rem", padding: "0" }} onClick={saveLocations}>Plan for {price}/-</button>
                    :
                    <button type="submit" className="btn" style={{ marginBottom: "1rem", padding: "0" }} onClick={saveLocations}>Plan your trip</button>
                }
                <p className='heading-locs' style={{justifyContent: "center"}}>Or</p>
                <Link to={`/fixeditineraries/${influencer}`}><button type="submit" className="btn" style={{ backgroundColor: "#DEDEDE", color: "#8B7F7F", padding: "0"
                }}>Explore Fixed Itinerary</button></Link>
            </div>
        </div>
    )
}
