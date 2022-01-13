import React from 'react';
import {Link} from 'react-router-dom';

export default function LocationBox(props) {
    const {location} = props;
    return (
        <div key={location._id} className='card my-1' style={{ left: "0", height: "204px", width: "320px", paddingTop:"5px" }}>
            <img src='https://ecobanjarabackend.herokuapp.com/api/image/05e4bc6a-e561-4a65-856d-1bae6f9eccb2.jpg' alt="img" style={{ width: "295.96px", height: "119px", objectFit: "cover" }}></img>
            <Link to={`/destination/${location._id}`}>{location.city}</Link>
            <div className="card-text" style={{ fontSize: "12px" }}>
                <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
                {location.address}</div>
        </div>
    )
}
