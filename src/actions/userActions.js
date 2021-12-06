import Axios from "axios";
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/userConstants";

export const register = (name, email, password, number, role) => async(dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { number, password } });
    try{
        const {data} = await Axios.post('https://ecobanjarabackend.herokuapp.com/api/auth/signup', {name, email, password, number, role});
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
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
        const {data} = await Axios.post('https://ecobanjarabackend.herokuapp.com/api/auth/signin', {mobileNo, password});
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