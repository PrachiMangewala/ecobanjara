import { LOCATION_DETAILS_FAIL, LOCATION_DETAILS_REQUEST, LOCATION_DETAILS_SUCCESS, LOCATION_LIST_FAIL, LOCATION_LIST_REQUEST, LOCATION_LIST_SUCCESS, SAVE_LOCATION } from "../constants/locationConstants";

export const locationListReducer = (state = {loading: true, locations: [] }, action) => {
    switch(action.type){
        case LOCATION_LIST_REQUEST:
            return { loading: true};
        case LOCATION_LIST_SUCCESS:
            return { loading: false, locations: action.payload};
        case LOCATION_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const locationDetailsReducer = (state = {product:{}, loading:true}, action) => {
    switch(action.type){
        case LOCATION_DETAILS_REQUEST:
            return { loading: true};
        case LOCATION_DETAILS_SUCCESS:
            return { loading: false, location: action.payload};
        case LOCATION_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const saveLocationReducer = (state = {savedLocations: []}, action) => {
    switch(action.type){
        case SAVE_LOCATION:
            const location = action.payload;
            return {...state, savedLocations: [...state.savedLocations, location]};
        default: 
        return state;
    }
}