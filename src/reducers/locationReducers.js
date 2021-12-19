import { LOCATION_DETAILS_FAIL, LOCATION_DETAILS_SUCCESS, LOCATION_LIST_FAIL, LOCATION_LIST_SUCCESS, SAVED_LOCATION_LIST_FAIL, SAVED_LOCATION_LIST_SUCCESS } from "../constants/locationConstants";

export const locationListReducer = (state = {loading: true, locations: [] }, action) => {
    switch(action.type){
        case LOCATION_LIST_SUCCESS:
            return { loading: false, locations: action.payload};
        case LOCATION_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const locationDetailsReducer = (state = {location:{}}, action) => {
    switch(action.type){
        // case LOCATION_DETAILS_REQUEST:
        //     return { loading: true};
        case LOCATION_DETAILS_SUCCESS:
            return { loading: false, location: action.payload};
        case LOCATION_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const savedlocationsListReducer = (state = {loading: true, savedlocations: [] }, action) => {
    switch(action.type){
        case SAVED_LOCATION_LIST_SUCCESS:
            return { loading: false, savedlocations: action.payload};
        case SAVED_LOCATION_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}