import { FIXEDITINERARY_LIST_FAIL, FIXEDITINERARY_LIST_SUCCESS } from "../constants/fixedItineraryConstants";

export const fixedItineraryListReducer = (state = { fixedItinerary: [] }, action) => {
    switch(action.type){
        case FIXEDITINERARY_LIST_SUCCESS:
            return { loading: false, fixedItinerary: action.payload};
        case FIXEDITINERARY_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}