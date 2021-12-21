import { FIXEDITINERARY_LIST_FAIL, FIXEDITINERARY_LIST_SUCCESS, ITINERARY_PRICE_FAIL, ITINERARY_PRICE_REQUEST, ITINERARY_PRICE_SUCCESS } from "../constants/fixedItineraryConstants";

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

export const getItineraryPriceReducer = ( state = {price: ""}, action) => {
    switch(action.type){
        case ITINERARY_PRICE_SUCCESS:
            return {loading: false, price: action.payload};
        case ITINERARY_PRICE_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};