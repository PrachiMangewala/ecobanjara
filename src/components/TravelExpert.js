import { useState } from "react";
import {Link} from 'react-router-dom';
import dotenv from 'dotenv';
dotenv.config();

export default function TravelExpert(props) {
    const {TravelExpert} = props;
    const [image] = useState(process.env.PUBLIC_URL +  '/images/People.jpg')
    return (
        <div class="Expert">
           <img class="expertImage" src={process.env.REACT_APP_API_ENDPOINT + "/api/image/" + TravelExpert.profileImg} alt={TravelExpert.name}></img> 
           <Link to={`/influencer/${TravelExpert._id}`} className="Name my-1">{TravelExpert.name}</Link>
        </div>
    )
}
