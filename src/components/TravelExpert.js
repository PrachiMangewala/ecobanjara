import { useState } from "react";
import {Link} from 'react-router-dom';

export default function TravelExpert(props) {
    const {TravelExpert} = props;
    const [image] = useState(process.env.PUBLIC_URL +  '/images/People.jpg')
    return (
        <div class="Expert">
           <img class="expertImage" src={TravelExpert.image? TravelExpert.image : image} alt={TravelExpert.name}></img> 
           <Link to={`/influencer/${TravelExpert._id}`} className="Name my-1">{TravelExpert.name}</Link>
        </div>
    )
}
