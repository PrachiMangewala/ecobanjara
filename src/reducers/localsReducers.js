import { LOCALS_LIST_FAIL, LOCALS_LIST_SUCCESS, SAVED_LOCALS_LIST_FAIL, SAVED_LOCALS_LIST_SUCCESS } from "../constants/localsConstant";

export const localsListReducer = (state = { locals: [] }, action) => {
    switch(action.type){
        case LOCALS_LIST_SUCCESS:
            return { loading: false, locals: action.payload};
        case LOCALS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const savedlocalsListReducer = (state = {loading: true, savedLocals: [] }, action) => {
    switch(action.type){
        case SAVED_LOCALS_LIST_SUCCESS:
            return { loading: false, savedLocals: action.payload};
        case SAVED_LOCALS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}