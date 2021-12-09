// import { useEffect } from 'react';
import { useState } from 'react';
import { saveLocation } from '../actions/locationActions';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
// import axios from 'axios';

export default function Location(props){
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const [saved, setSaved] =  useState(false);
    const {location} = props;
    // const [image, setImage] = useState("");
    const dispatch = useDispatch();
    // useEffect(()=>{
    //     const fetchImage = async() => {
    //       try{
    //         const data = await axios.get('https://ecobanjarabackend.herokuapp.com/api/image/05e4bc6a-e561-4a65-856d-1bae6f9eccb2.jpg');
    //         setImage(data);
    //     } catch(err){
    //         console.log(err);
    //       }
    //     };
    //     fetchImage();
    // })

    const AddToSavedLocations = () => {
        setSaved(true);
        if(location._id){
            console.log(location._id);
            dispatch(saveLocation(location._id, userInfo));
        }
    }

    const RemoveFromSavedLocations = () => {
        setSaved(false);
    }
    
    return(
    <div key={location._id} className="card">
              <div>
                <img src='https://ecobanjarabackend.herokuapp.com/api/image/05e4bc6a-e561-4a65-856d-1bae6f9eccb2.jpg' alt={location.name}></img>
                {!saved &&  <span className="overlay" onClick={AddToSavedLocations}><i class="fas fa-map-marker-alt loc-icon"></i></span>}
                {saved &&  <span className="overlay2" onClick={RemoveFromSavedLocations}><i class="fas fa-map-marker-alt loc-icon"></i></span>}
              </div>
              {/* <p>{location.city}</p> */}
              <Link to={`/destination/${location._id}`}>{location.city}</Link>
              <div className="card-text">
                <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
                {location.address}</div>
          </div>
)}
