import { JOURNEY_LIST_FAIL, JOURNEY_LIST_SUCCESS } from "../constants/journeyConstants";

export const journeyListReducer = (state = { journeys: [] }, action) => {
    switch(action.type){
        case JOURNEY_LIST_SUCCESS:
            return { loading: false, journeys: action.payload};
        case JOURNEY_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}