import React from 'react'

export default function Popup(props) {
    return (props.trigger)? (
        <div>
                <div className='popup-box'>
                <div className="close-icon"><i className="fas fa-times" onClick={() => props.setTrigger(false)}></i></div>
                <div className="popup-inner py-1">
                    <p className='itinery-name px-1' style={{color: "#00365B"}}>Plan your trip with real human beings and not search engines :)</p>
                    <p className='itinery-name px-1' style={{color: "#00365B", fontWeight: "500", textDecoration: "underline"}}>How it works</p>
                    <div>
                        <div>
                            <div style={{display:"flex", alignItems:"center"}} className='mr-05 my-1'>
                                <img src="/images/location.png" alt="location"></img>
                                <div>
                                    <div className="iten-text" style={{color: "#3A3A3A", fontWeight: "600"}}>Look for the destination</div>
                                    <div className="iten-text">Search for the destination you wish to travel for your next trip</div>
                                </div>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}} className='mr-05 my-1'>
                                <img src="/images/bag.png" alt="location" style={{padding:"1rem"}}></img>
                                <div>
                                    <div className="iten-text" style={{color: "#3A3A3A", fontWeight: "600"}}>Look for the destination</div>
                                    <div className="iten-text">Search for the destination you wish to travel for your next trip</div>
                                </div>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}} className='mr-05 my-1'>
                                <img src="/images/map.png" alt="location"></img>
                                <div>
                                    <div className="iten-text" style={{color: "#3A3A3A", fontWeight: "600"}}>Start Planning Itinerary</div>
                                    <div className="iten-text">Get the fixed itinerary or have your itinerary personalized**</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='mx-1'></hr>
                    <div className="iten-text" style={{textAlign: "center", margin:"0 1rem"}}>**With every personalised itinerary, a traveller gets to connect with travel expert through unlimited chat (valid for duration of the itinerary) and two virtual meetings of 30 minutes each.</div>
                </div>
            </div>
        </div>
    ) : "";
}
