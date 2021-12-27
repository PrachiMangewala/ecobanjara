import React, { useState } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';

export default function IteneraryScreen() {
    const location = useLocation();
    const [fixedItinerary] = useState(location.state.fixedItinerary);
    const [destinationsWhole] = useState(location.state.destinationsWhole);
    const navigate = useNavigate();
    console.log(fixedItinerary);
    // console.log(destinationsWhole);

    const addItinerarysuccess = () => {
        navigate(`/congratulations/${fixedItinerary._id}`);
    }

    return ( fixedItinerary &&
        <div>
            <div className='py-1 px-1' style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                <p><i class="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect' style={{color: "#000000"}}>Add Itineraries</p>
            </div>
            <img src={process.env.PUBLIC_URL + "/images/tajmahal.jpg"} alt="img" className="dest-backimage" style={{height: "30vh"}}></img>
            <div className="background-blur" style={{top: "-51px"}}>
                <p className="blur-font">Duration: <span>{fixedItinerary.content.length} Days</span></p>
            </div>
            <div style={{position:"relative", top:"-40px"}}>
            <div>
                <p className='connect' style={{color: "#121212"}}>{fixedItinerary.itineraryName}</p>
                <p className='connect' style={{color: "#00365B"}}>Rs {fixedItinerary.price}/- </p>
            </div>
            <div>
                <p className="mx-1 dest-p">{fixedItinerary.description}<Link to="/" className="font-yellow"> Read More</Link></p>
            </div>
            <div>
                <p className="mx-1 connect my-2"><span class="icon"><i class="fas fa-map-marker-alt marker"></i></span>Locations visited</p>
                <div className="location-container mx-1">
                <div className="location-container">
                    {destinationsWhole? 
                        destinationsWhole.map((destination) => (
                            <div className="location-box" key={destination._id}>{destination.address}</div>
                        ))
                        : 
                        ""
                    }
                </div>
                </div>
            </div>
            <div>
                {/* <p className='connect mx-1'>5D / 4N</p>
                <div className='mx-1' style={{display: "flex", flexWrap: "wrap"}}>
                    {[...Array(5)].map((x,i) =>(
                        <div style={{display: "flex", alignItems: "center", marginBottom: "1rem"}}>
                            <span className='blue-circle2'><i class="fas fa-check" style={{color: "#ffffff", fontWeight: "500"}}></i></span>
                            {(i===4)?
                            <div></div>
                            :(
                                <div className='bottom-blue'></div>
                            )    
                        }
                        </div>
                    ))}
                </div> */}
                <div className="mx-1 my-1">
                    <button className='btn' onClick={addItinerarysuccess}>Add Itinerary</button>
                </div>
            </div>
            </div>
        </div>
    )
}
