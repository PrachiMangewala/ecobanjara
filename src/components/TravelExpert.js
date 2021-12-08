import { useState } from "react";

export default function TravelExpert(props) {
    const {TravelExpert} = props;
    const [image] = useState(process.env.PUBLIC_URL +  'images/profile.png')
    return (
        <div class="Expert">
           <img class="expertImage" src={TravelExpert.image? TravelExpert.image : image} alt={TravelExpert.name}></img> 
           <p class="Name">{TravelExpert.name}</p>
        </div>
    )
}
