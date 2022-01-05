import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { detailsLocation } from '../actions/locationActions';

export default function DestinationName(props) {
    const{id} = props;
    const dispatch = useDispatch();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const locationDetails = useSelector((state) => state.locationDetails);
    const { location } = locationDetails;
    console.log(location)

    useEffect(()=>{
        dispatch(detailsLocation(userInfo, id));
    },[dispatch, userInfo, id]);

    return (
        <div>
            {location.name}
        </div>
    )
}
