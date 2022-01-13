import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { listLocations, listNewestLocations, listPopularLocations } from '../actions/locationActions';
import LocationBox from '../components/LocationBox';
import MessageBox from '../components/MessageBox';

export default function AllDestinationsScreen(props) {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    console.log(userInfo);
    const locationsList = useSelector((state) => state.locationsList);
    const { error, locations} = locationsList;
    const dispatch = useDispatch();
    const popularlocationsList = useSelector((state) => state.popularlocationsList);
    const { popularlocations} = popularlocationsList;
    const newestlocationsList = useSelector((state) => state.newestlocationsList);
    const {newestlocations} = newestlocationsList;
    console.log(popularlocations);

    useEffect(()=>{
      dispatch(listLocations(userInfo));
    },[dispatch, userInfo]);

    useEffect(()=>{
      dispatch(listPopularLocations(userInfo));
    },[dispatch, userInfo]);

    useEffect(()=>{
      dispatch(listNewestLocations(userInfo));
    },[dispatch, userInfo]);


    return (
        error? <MessageBox>{error}</MessageBox>
        :
        <div>
            <div className='py-1 px-1' style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                <p><i class="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect' style={{color: "#000000"}}>Destinations</p>
            </div>
            <div className='py-1 px-1' style={{backgroundColor: "#efefef"}}>
                <div className="location-container">
                <div className={props.type==="all"? "location-box-selected" : "location-box"} style={{padding: "3px 7px", marginLeft: "1rem"}}><Link to="/destinations/all">A-Z</Link></div>
                <div className={props.type==="popular"? "location-box-selected" : "location-box"} style={{padding: "3px 7px", marginLeft: "1rem"}}><Link to="/destinations/popular">Popular First</Link></div>
                <div className={props.type==="newest"? "location-box-selected" : "location-box"} style={{padding: "3px 7px", marginLeft: "1rem"}}><Link to="/destinations/newest">Newest First</Link></div>
                </div>
                <div className='location-container pb-2'>
                    { props.type==="all"?
                    (
                        locations.map((location) => (
                            <LocationBox key={location._id} location={location}></LocationBox>
                        ))
                    ) : props.type==="popular"? 
                        (
                        popularlocations.map((location) => (
                            <LocationBox key={location._id} location={location}></LocationBox>
                        ))
                    ) : (
                        newestlocations.map((location) => (
                            <LocationBox key={location._id} location={location}></LocationBox>
                        ))
                    ) }
                </div>
            </div>
        </div>
    )
}
