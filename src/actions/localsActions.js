import Axios from "axios";
import { LOCALS_LIST_FAIL, LOCALS_LIST_SUCCESS, SAVED_LOCALS_LIST_FAIL, SAVED_LOCALS_LIST_SUCCESS } from "../constants/localsConstant";
import dotenv from 'dotenv';
dotenv.config();

export const listLocals = (userInfo) => async (dispatch) => {
    try {
      const {data} = await Axios.get(process.env.REACT_APP_API_ENDPOINT + '/api/user/top/locals', 
              { headers: {
                  "x-access-token": `${userInfo.accessToken}`,
              }});
      console.log(data);
      dispatch({ type: LOCALS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: LOCALS_LIST_FAIL, payload: error.message });
    }
}

export const getsavedLocals = (userInfo) => async(dispatch) => {
  try{
      // console.log(userInfo.accessToken);
      const {data} = await Axios.get(process.env.REACT_APP_API_ENDPOINT + '/api/user/saved/locals',
      { headers: {
          "x-access-token": `${userInfo.accessToken}`,
      }});
      console.log(data);
    dispatch({type: SAVED_LOCALS_LIST_SUCCESS, payload: data});
  } catch(error){
    dispatch({type: SAVED_LOCALS_LIST_FAIL, payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message,})
  }
}