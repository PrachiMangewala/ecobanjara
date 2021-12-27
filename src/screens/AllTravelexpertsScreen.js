import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listTravelexperts } from '../actions/travelexpertsActions';
import MessageBox from '../components/MessageBox';
import {Link} from 'react-router-dom';
import TravelExpertBox from '../components/TravelExpertBox';

export default function AllTravelexpertsScreen(props) {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    console.log(userInfo);
    const travelexpertsList = useSelector((state) => state.travelexpertsList);
    const {error, travelexperts} = travelexpertsList;
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(listTravelexperts(userInfo));
    },[dispatch, userInfo]);


    return (
        error? <MessageBox>{error}</MessageBox>
        :
        <div>
            <div className='py-1 px-1' style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                <p><i class="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect' style={{color: "#000000"}}>Travel Experts</p>
            </div>
            <div className='py-1 px-1'>
            <div className="location-container">
                <div className={props.type==="rating"? "location-box-selected" : "location-box"} style={{padding: "3px 7px", marginLeft: "1rem"}}><Link to="/travelexperts/rating">Top rated first</Link></div>
                <div className={props.type==="all"? "location-box-selected" : "location-box"} style={{padding: "3px 7px", marginLeft: "1rem"}}><Link to="/travelexperts/rating">A-Z</Link></div>
                <div className={props.type==="newest"? "location-box-selected" : "location-box"} style={{padding: "3px 7px", marginLeft: "1rem"}}><Link to="/travelexperts/category">Category</Link></div>
                </div>
                <div className='pb-2 px-1'>
                    {props.type==="rating"? (
                        travelexperts.map((TravelExp) => (
                            <TravelExpertBox key={TravelExp._id} TravelExp={TravelExp}></TravelExpertBox>
                        ))
                    ) : props.type==="all"?(
                        <div>Hello</div>
                    ) : ""
                    }
                </div>
            </div>
        </div>
    )
}
