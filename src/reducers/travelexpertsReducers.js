import { TRAVELEXPERTS_LIST_FAIL, TRAVELEXPERTS_LIST_SUCCESS } from "../constants/TravelExpertsConstants";

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