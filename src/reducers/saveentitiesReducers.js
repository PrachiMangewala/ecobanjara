import { SAVE_ENTITY_FAIL, SAVE_ENTITY_REQUEST, SAVE_ENTITY_SUCCESS } from "../constants/saveentitiesConstants";

export const saveEntitiesReducer = ( state = {}, action) => {
    switch(action.type){
        case SAVE_ENTITY_REQUEST:
            return {loading: true};
        case SAVE_ENTITY_SUCCESS:
            return {loading: false, success: true, item: action.payload};
        case SAVE_ENTITY_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};