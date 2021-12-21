import { USERS_LIST_FAIL, USERS_LIST_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_SUCCESS } from "../constants/userConstants";

export const userRegisterReducer = ( state = {}, action) => {
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading: true};
        case USER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_REGISTER_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const userSigninReducer = ( state = {}, action) => {
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {loading: true};
        case USER_SIGNIN_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_SIGNIN_FAIL:
            return {loading: false, error: action.payload};
        case USER_SIGNOUT:
            return{};
        default:
            return state;
    }
};

export const usersListReducer = (state = { users: [] }, action) => {
    switch(action.type){
        case USERS_LIST_SUCCESS:
            return { loading: false, users: action.payload};
        case USERS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const userUpdateProfileReducer = ( state = {}, action) => {
    switch(action.type){
        case USER_UPDATE_PROFILE_SUCCESS:
            return {loading: false, success: true};
        case USER_UPDATE_PROFILE_FAIL:
           return {loading: false, error: action.payload};
        default:
            return state;
    }
};