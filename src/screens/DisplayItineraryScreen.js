import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getsingleFixedItinerary } from '../actions/fixedItineraryActions';
import {Link} from 'react-router-dom';

export default function DisplayItineraryScreen() {
    const {id} = useParams();
    const itineraryId = id;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const singleFixedItinerary = useSelector((state) => state.singleFixedItinerary);
    const { fixedItinerary } = singleFixedItinerary;
    const dispatch = useDispatch();
    // const days = useState(itinerary? Number(itinerary.content.length) : 1);

    useEffect(()=>{
        dispatch(getsingleFixedItinerary(userInfo, itineraryId));
    },[dispatch, userInfo, itineraryId]);
    
    const navigate = useNavigate();
    console.log(fixedItinerary);
    // console.log(destinationsWhole);

    const checkout = () => {
        navigate(`/fixeditinerary/checkout/${fixedItinerary._id}`, {state:{fixedItinerary: fixedItinerary}});
    }

    return ( fixedItinerary &&
        <div>
            <div className='py-1 px-1' style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                <p><i class="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect' style={{color: "#000000"}}>Add Itineraries</p>
            </div>
            <img src={process.env.PUBLIC_URL + "/images/tajmahal.jpg"} alt="img" className="dest-backimage" style={{height: "30vh"}}></img>
            <div className="background-blur" style={{top: "-51px"}}>
                <p className="blur-font">Duration: <span>{fixedItinerary.content? fixedItinerary.content.length : ""} Days</span></p>
            </div>
            <div style={{position:"relative", top:"-40px"}}>
            <div>
                <p className='connect' style={{color: "#121212"}}>{fixedItinerary.itineraryName}</p>
            </div>
            <div>
                <p className="mx-1 dest-p">{fixedItinerary.description}<Link to="/" className="font-yellow"> Read More</Link></p>
            </div>
            <div>
                <p className="mx-1 connect my-2"><span class="icon"><i class="fas fa-map-marker-alt marker"></i></span>Locations visited</p>
                <div className="location-container mx-1">
                <div className="location-container">
                    {/* {destinationsWhole? 
                        destinationsWhole.map((destination) => (
                            <div className="location-box" key={destination._id}>{destination.address}</div>
                        ))
                        : 
                        ""
                    } */}
                    <div className="location-box">Shimla, HP</div>
                    <div className="location-box">Agra, UP</div>
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
                    <button className='btn' onClick={checkout}>Buy for Rs {fixedItinerary.price}/-</button>
                </div>
            </div>
            </div>
        </div>
    )
}
