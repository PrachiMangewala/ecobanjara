import Axios from "axios";
import { USERS_LIST_FAIL, USERS_LIST_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_SUCCESS } from "../constants/userConstants";

export const register = (email, password, name, role, mobileNo, profileImg, dob, gender) => async(dispatch) => {
    // dispatch({ type: USER_REGISTER_REQUEST, payload: { mobileNo, password } });
    try{
        const {data} = await Axios.post('https://ecobanjarabackend.herokuapp.com/api/auth/signup', {email, password, name, role, mobileNo, profileImg, dob, gender});
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        console.log(data);
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch(error) {
        dispatch({ type: USER_REGISTER_FAIL, 
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message 
    });
    }
};

export const signin = (mobileNo, password) => async(dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { mobileNo, password } });
    try{
        const {data} = await Axios.post('https://ecobanjarabackend.herokuapp.com/api/user/mobile/password', {mobileNo, password});
        console.log(data);
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch(error) {
        dispatch({ type: USER_SIGNIN_FAIL, 
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message 
    });
    }
};

export const Otpsignin = (accessToken) => async(dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { accessToken } });
    try{
        const {data} = await Axios.post('https://ecobanjarabackend.herokuapp.com/api/user/signin/mobile/otp', {accessToken});
        console.log(data);
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch(error) {
        dispatch({ type: USER_SIGNIN_FAIL, 
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message 
    });
    }
};

export const SocialMediasignin = (accessToken) => async(dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { accessToken } });
    try{
        const {data} = await Axios.post('https://ecobanjarabackend.herokuapp.com/api/user/signin/social/media', {accessToken});
        console.log(data);
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch(error) {
        dispatch({ type: USER_SIGNIN_FAIL, 
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message 
    });
    }
};

export const InstaSignin = (state) => async(dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: {state} });
    try{
        const {data} = await Axios.post('https://ecobanjarabackend.herokuapp.com/api/insta/auth/url', {state});
        console.log(data);
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch(error) {
        dispatch({ type: USER_SIGNIN_FAIL, 
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message 
    });
    }
};

export const signout = () => async(dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({type: USER_SIGNOUT});
};

export const getAllUsers = (userInfo) => async (dispatch) => {
    try {
      const {data} = await Axios.get('https://ecobanjarabackend.herokuapp.com/api/users/all');
      console.log(data);
      dispatch({ type: USERS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: USERS_LIST_FAIL, payload: error.message });
    }
}

export const updateUserProfile = (userInfo, email, name, mobileNo, profileImg, gender) => async(dispatch) => {
    try{
        const {data} = await Axios.post('https://ecobanjarabackend.herokuapp.com/api/user/profile/update', {email, name, mobileNo, profileImg, gender},
        { headers: {
            "x-access-token": `${userInfo.accessToken}`,
        }});
        dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch(error) {
        dispatch({ type: USER_UPDATE_PROFILE_FAIL, 
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message 
    });
    }
};