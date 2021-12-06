import { LOCALS_LIST_FAIL, LOCALS_LIST_SUCCESS } from "../constants/localsConstant";

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