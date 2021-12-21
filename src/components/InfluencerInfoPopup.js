import React from 'react'

export default function InfluencerInfoPopup(props) {
    return (props.trigger)? (
        <div>
                <div className='popup-box'>
                <div className="close-icon"><i class="fas fa-times" onClick={() => props.setTrigger(false)}></i></div>
                <div className="popup-inner py-1">
                    <div>
                        <div>
                            <div style={{display:"flex", alignItems:"center"}} className='mr-05 my-1'>
                                <img src={process.env.PUBLIC_URL +  "/images/standard.png"} alt="standard" className='mx-1 my-1'></img>
                                <div>
                                    <div className="iten-text" style={{color: "#3A3A3A", fontWeight: "600"}}>Standard Traveller</div>
                                    <div className="iten-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                </div>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}} className='mr-05 my-1'>
                                <img src={process.env.PUBLIC_URL +  "/images/premium.png"} alt="premium" className='premium'></img>
                                <div>
                                    <div className="iten-text" style={{color: "#3A3A3A", fontWeight: "600"}}>Premium Traveller</div>
                                    <div className="iten-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                </div>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}} className='mr-05 my-1'>
                                <img src={process.env.PUBLIC_URL +  "/images/supreme.png"} alt="supreme" className='premium' style={{backgroundColor: "#0492F3"}}></img>
                                <div>
                                    <div className="iten-text" style={{color: "#3A3A3A", fontWeight: "600"}}>Supreme Traveller</div>
                                    <div className="iten-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                </div>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}} className='mr-05 my-1'>
                                <img src={process.env.PUBLIC_URL +  "/images/star.png"} alt="star" className='mx-1 my-1'></img>
                                <div>
                                    <div className="iten-text" style={{color: "#3A3A3A", fontWeight: "600"}}>Star Traveller</div>
                                    <div className="iten-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}
