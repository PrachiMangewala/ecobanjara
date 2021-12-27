import { FIXEDITINERARY_LIST_FAIL, FIXEDITINERARY_LIST_SUCCESS, FIXED_ITINERARY_SAVE_FAIL, FIXED_ITINERARY_SAVE_SUCCESS, GET_FIXED_ITINERARY_FAIL, GET_FIXED_ITINERARY_SUCCESS, ITINERARY_PRICE_FAIL, ITINERARY_PRICE_REQUEST, ITINERARY_PRICE_SUCCESS, SAVE_CONTENT_FAIL, SAVE_CONTENT_SUCCESS } from "../constants/fixedItineraryConstants";

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

export const singleFixedItineraryreducer = (state = { fixedItinerary: [] }, action) => {
    switch(action.type){
        case GET_FIXED_ITINERARY_SUCCESS:
            return { loading: false, fixedItinerary: action.payload};
        case GET_FIXED_ITINERARY_FAIL:
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

export const saveFixedItineraryReducer = ( state = {fixedItinerary: {}}, action) => {
    switch(action.type){
        case FIXED_ITINERARY_SAVE_SUCCESS:
            return {loading: false, fixedItinerary: action.payload};
        case FIXED_ITINERARY_SAVE_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const saveContentReducer = ( state = {ItineraryContent: {}}, action) => {
    switch(action.type){
        case SAVE_CONTENT_SUCCESS:
            return {loading: false, ItineraryContent: action.payload};
        case SAVE_CONTENT_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};