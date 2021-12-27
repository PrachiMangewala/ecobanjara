import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function TravelExpertBox(props) {
    const {TravelExp} = props;
    const [image] = useState(process.env.PUBLIC_URL +  '/images/profile.png')

    return (
        <div>
            <div key={TravelExp._id} className='my-1'>
                                <div style={{display:"flex", alignItems: "center", justifyContent: "space-between"}}>
                                    <div style={{display:"flex"}}>
                                    <img class="expertImage" src={TravelExp.profileImg? TravelExp.profileImg : image} alt={TravelExp.name}></img> 
                                    <div className='mx-1'>
                                        <Link to={`/influencer/${TravelExp._id}`} className="Name">{TravelExp.name}</Link>
                                        <div>{TravelExp.address}</div>
                                    </div>
                                    </div>
                                    <div>
                                        <div className="rating-component" style={{marginBottom: "0.5rem"}}>
                                            <p className="star-icon" style={{margin:"0"}}><span style={{fontWeight: "500", fontSize: "12px", color: "#6F7789", marginRight: "0.3rem"}}>Rating: </span><i class="fas fa-star"></i><span style={{fontWeight: "500", fontSize: "12px", color: "#6F7789", marginLeft: "0.3rem"}}>{TravelExp.rating}</span></p>
                                        </div>
                                        <div className="reviews"><Link to="/" style={{color: "#FC7E00", textAlign: "right"}}>Reviews</Link></div>
                                    </div>
                                </div>
                                        <div style={{borderBottom: "1px solid #E7E7E7"}} className='my-1'></div>
                            </div>
        </div>
    )
}
