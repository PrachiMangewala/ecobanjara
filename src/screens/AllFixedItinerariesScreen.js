import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTravelExpert } from '../actions/travelexpertsActions';
import FixedItineraryBox from '../components/FixedItineraryBox';

export default function AllFixedItinerariesScreen() {
    const {id} = useParams();
    const influencerId = id;
    const travelExpertInfo = useSelector((state) => state.travelExpertInfo);
    const { travelexpert } = travelExpertInfo;
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTravelExpert(influencerId));
    },[dispatch, influencerId]);

    return (
        travelexpert?
        <div>
            <div className='py-1 px-1' style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                <p><i class="fas fa-chevron-left" style={{ fontSize: "1.2rem" }}></i></p>
                <p className='connect' style={{color: "#000000"}}>Fixed Itineraries</p>
            </div>
            <div className='py-1 px-1' style={{backgroundColor: "#C4C4C4"}}>
            {
                    travelexpert.fixeditinerary?
                    (
                        travelexpert.fixeditinerary.map((fixedIt) => (
                            <FixedItineraryBox fixedIt={fixedIt}></FixedItineraryBox>
                        ))
                        ) : " "
            }
            </div>
        </div>
        :""
    )
}
