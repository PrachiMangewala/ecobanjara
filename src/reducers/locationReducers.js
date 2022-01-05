import { ADD_LOCATION_FAIL, ADD_LOCATION_SUCCESS, LOCATION_DETAILS_FAIL, LOCATION_DETAILS_SUCCESS, LOCATION_LIST_FAIL, LOCATION_LIST_SUCCESS, NEWEST_LOCATION_LIST_FAIL, NEWEST_LOCATION_LIST_SUCCESS, POPULAR_LOCATION_LIST_FAIL, POPULAR_LOCATION_LIST_SUCCESS, SAVED_LOCATION_LIST_FAIL, SAVED_LOCATION_LIST_SUCCESS } from "../constants/locationConstants";

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

export const popularlocationListReducer = (state = {loading: true, popularlocations: [] }, action) => {
    switch(action.type){
        case POPULAR_LOCATION_LIST_SUCCESS:
            return { loading: false, popularlocations: action.payload};
        case POPULAR_LOCATION_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const newestlocationListReducer = (state = {loading: true, newestlocations: [] }, action) => {
    switch(action.type){
        case NEWEST_LOCATION_LIST_SUCCESS:
            return { loading: false, newestlocations: action.payload};
        case NEWEST_LOCATION_LIST_FAIL:
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

export const addLocationReducer = (state = {loading: true, location: {}}, action) => {
    switch (action.type) {
      case ADD_LOCATION_SUCCESS:
        return { loading: false, success: true, location: action.payload };
      case ADD_LOCATION_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
};