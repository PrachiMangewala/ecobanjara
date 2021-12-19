import { useState } from "react";
import {Link} from 'react-router-dom';

export default function TravelExpert(props) {
    const {TravelExpert} = props;
    const [image] = useState(process.env.PUBLIC_URL +  '/images/profile.png')
    return (
        <div class="Expert">
           <img class="expertImage" src={TravelExpert.image? TravelExpert.image : image} alt={TravelExpert.name}></img> 
           <Link to={`/influencer/${TravelExpert._id}`} className="Name">{TravelExpert.name}</Link>
        </div>
    )
}
