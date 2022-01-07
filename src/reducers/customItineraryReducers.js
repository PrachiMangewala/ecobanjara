import { ADD_ITINERARY_DAY_FAIL, ADD_ITINERARY_DAY_SUCCESS, ADD_ITINERARY_SECTION_FAIL, ADD_ITINERARY_SECTION_SUCCESS, GET_COMMENTS_FAIL, GET_COMMENTS_SUCCESS, GET_CUSTOM_ITINERARY_FAIL, GET_CUSTOM_ITINERARY_SUCCESS } from "../constants/customItineraryConstants";

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

export const addSectionReducer = (state = { section: [] }, action) => {
    switch(action.type){
        case ADD_ITINERARY_SECTION_SUCCESS:
            return { loading: false, section: action.payload};
        case ADD_ITINERARY_SECTION_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const addDayReducer = (state = { day: [] }, action) => {
    switch(action.type){
        case ADD_ITINERARY_DAY_SUCCESS:
            return { loading: false, day: action.payload};
        case ADD_ITINERARY_DAY_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const getCommentsReducer = (state = { comments: [] }, action) => {
    switch(action.type){
        case GET_COMMENTS_SUCCESS:
            return { loading: false, comments: action.payload};
        case GET_COMMENTS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}