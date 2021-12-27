import { GET_CUSTOM_ITINERARY_FAIL, GET_CUSTOM_ITINERARY_SUCCESS } from "../constants/customItineraryConstants";

export const getCustomItineraryreducer = (state = { customItinerary: [] }, action) => {
    switch(action.type){
        case GET_CUSTOM_ITINERARY_SUCCESS:
            return { loading: false, customItinerary: action.payload};
        case GET_CUSTOM_ITINERARY_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}