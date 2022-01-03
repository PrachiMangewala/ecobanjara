import { VIDEO_DETAILS_FAIL, VIDEO_DETAILS_REQUEST, VIDEO_DETAILS_SUCCESS } from "../constants/videoConstants";

export const videoDetailsReducer = (state = {loading: true, video: [] }, action) => {
    switch(action.type){
        case VIDEO_DETAILS_REQUEST:
            return { loading: true };
        case VIDEO_DETAILS_SUCCESS:
            return { loading: false, video: action.payload};
        case VIDEO_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}