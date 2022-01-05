import { GET_TRAVEL_EXPERT_FAIL, GET_TRAVEL_EXPERT_SUCCESS, SAVED_TRAVELEXPERTS_LIST_FAIL, SAVED_TRAVELEXPERTS_LIST_SUCCESS, TRAVELEXPERTS_LIST_FAIL, TRAVELEXPERTS_LIST_SUCCESS } from "../constants/TravelExpertsConstants";

export const travelexpertsListReducer = (state = { travelexperts: [] }, action) => {
    switch(action.type){
        case TRAVELEXPERTS_LIST_SUCCESS:
            return { loading: false, travelexperts: action.payload};
        case TRAVELEXPERTS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const getTravelExpertReducer = (state = { travelexpert: [] }, action) => {
    switch(action.type){
        case GET_TRAVEL_EXPERT_SUCCESS:
            return { loading: false, travelexpert: action.payload};
        case GET_TRAVEL_EXPERT_FAIL :
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const savedTravelexpertsListReducer = (state = {loading: true, savedTravelexperts: [] }, action) => {
    switch(action.type){
        case SAVED_TRAVELEXPERTS_LIST_SUCCESS:
            return { loading: false, savedTravelexperts: action.payload};
        case SAVED_TRAVELEXPERTS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}