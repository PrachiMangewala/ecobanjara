import { BLOG_LIST_FAIL, BLOG_LIST_SUCCESS } from "../constants/blogConstants";

export const blogListReducer = (state = {loading: true, blogs: [] }, action) => {
    switch(action.type){
        case BLOG_LIST_SUCCESS:
            return { loading: false, blogs: action.payload};
        case BLOG_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}