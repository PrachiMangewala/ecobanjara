import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { getsavedLocations } from '../actions/locationActions';
import { removeEntity, saveEntity } from '../actions/saveentitiesActions';
import dotenv from 'dotenv';
dotenv.config();

export default function Location(props){
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const {location} = props;
    const dispatch = useDispatch();
    const savedLocationsList = useSelector((state) => state.savedLocationsList);
    const {savedlocations} = savedLocationsList;
    console.log(savedlocations)

    useEffect(()=>{
        dispatch(getsavedLocations(userInfo));
      },[dispatch, userInfo]);

    const AddToSavedLocations = (locationId) => {
        if(savedlocations){
            const locationindex = savedlocations.find((location) => location._id === locationId)
            if(!locationindex){
                dispatch(saveEntity(userInfo, locationId))
                dispatch(getsavedLocations(userInfo));
                alert('This location has been saved.');
                dispatch(getsavedLocations(userInfo));
            }else{
                dispatch(removeEntity(userInfo, locationId));
                dispatch(getsavedLocations(userInfo));
                alert('Location removed');
                dispatch(getsavedLocations(userInfo));
            }
        }else{
            alert('Saved locations list is empty.')
        }
    }

    // const RemoveFromSavedLocations = (locationId) => {
    //     if(savedlocations){
    //         const locationindex = savedlocations.find((location) => location._id === locationId)
    //         if(!locationindex){
    //             dispatch(saveEntity(userInfo, locationId))
    //             dispatch(getsavedLocations(userInfo));
    //             alert('This location is already not saved.')
    //         }else{
    //             dispatch(removeEntity(userInfo, locationId));
    //             dispatch(getsavedLocations(userInfo));
    //             alert('Location removed')
    //         }
    //     }else{
    //         alert('Saved locations list is empty.')
    //     }
    // }
    
    return(
    <div key={location._id} className="card my-1">
              <div>
                <img src={process.env.REACT_APP_API_ENDPOINT + "/api/image/" + location.images} alt={location.name}></img>
                {!(savedlocations.find((loc) => loc._id === location._id)) &&  <span className="overlay" onClick={() => AddToSavedLocations(location._id)}><i class="far fa-heart"></i></span>}
                {(savedlocations.find((loc) => loc._id === location._id)) &&  <span className="overlay" onClick={() => AddToSavedLocations(location._id)}><i class="fas fa-heart"></i></span>}
              </div>
              <Link to={`/destination/${location._id}`}>{location.city}</Link>
              <div className="card-text">
                <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
                {location.address}</div>
          </div>
)}
