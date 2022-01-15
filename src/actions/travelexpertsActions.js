import Axios from "axios";
import { GET_TRAVEL_EXPERT_FAIL, GET_TRAVEL_EXPERT_SUCCESS, SAVED_TRAVELEXPERTS_LIST_FAIL, SAVED_TRAVELEXPERTS_LIST_SUCCESS, TRAVELEXPERTS_LIST_FAIL, TRAVELEXPERTS_LIST_SUCCESS } from "../constants/TravelExpertsConstants";
import dotenv from 'dotenv';
dotenv.config();

export const listTravelexperts = (userInfo) => async (dispatch) => {
    try {
      const {data} = await Axios.get(process.env.REACT_APP_API_ENDPOINT + '/api/user/top/influencers', 
              { headers: {
                  "x-access-token": `${userInfo.accessToken}`,
              }});
      console.log(data);
      dispatch({ type: TRAVELEXPERTS_LIST_SUCCESS, payload: data });
      localStorage.setItem('travelexperts', JSON.stringify(data));
    } catch (error) {
      dispatch({ type: TRAVELEXPERTS_LIST_FAIL, payload: error.message });
    }
}

export const getsavedTravelExperts = (userInfo) => async(dispatch) => {
  try{
      // console.log(userInfo.accessToken);
      const {data} = await Axios.get(process.env.REACT_APP_API_ENDPOINT + '/api/user/saved/influencer',
      { headers: {
          "x-access-token": `${userInfo.accessToken}`,
      }});
      console.log(data);
    dispatch({type: SAVED_TRAVELEXPERTS_LIST_SUCCESS, payload: data});
  } catch(error){
    dispatch({type: SAVED_TRAVELEXPERTS_LIST_FAIL, payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message,})
  }
}

export const getTravelExpert = (influencerId) => async(dispatch) => {
  try{
      // console.log(userInfo.accessToken);
      const {data} = await Axios.post(process.env.REACT_APP_API_ENDPOINT + '/api/user/profile/byid', {influencerId});
      // console.log(data);
    dispatch({type: GET_TRAVEL_EXPERT_SUCCESS, payload: data});
  } catch(error){
    dispatch({type:  GET_TRAVEL_EXPERT_FAIL, payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message,})
  }
}