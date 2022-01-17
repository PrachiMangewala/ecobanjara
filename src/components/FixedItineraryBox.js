import React from 'react';
import {Link} from 'react-router-dom';

export default function FixedItineraryBox(props) {
    const {fixedIt} = props;
    return (
        <div>
            <div class="d-flex" style={{backgroundColor: "#ffffff", marginBottom: "1rem"}}>
                        <img src={process.env.PUBLIC_URL +  '/images/tajmahal.jpg'} alt="img" className="blog-image"></img>
                        <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
                        <div style={{marginBottom: "1rem"}}>
                            <Link to={`/fixeditinerary/${fixedIt._id}`} className="dest-name" style={{margin: "0 0 0 0.5rem", color:"#121212"}}>{fixedIt.itineraryName}</Link>
                            <p className="blog-area"><span class="icon"><i class="fas fa-map-marker-alt marker" style={{fontSize:  "0.6rem", paddingRight:"0", margin: "0 0 0 0.5rem"}}></i></span>Uttarakhand</p>
                            <p className="blog-area" style={{paddingRight:"0", margin: "0 0 0 0.5rem"}}>{fixedIt.trip} Days</p>
                        </div>
                        <p className='price'>Rs {fixedIt.price}/-</p>
                        </div>
                    </div>
        </div>
    )
}
