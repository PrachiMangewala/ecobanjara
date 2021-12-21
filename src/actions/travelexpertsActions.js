import Axios from "axios";
import { SAVED_TRAVELEXPERTS_LIST_FAIL, SAVED_TRAVELEXPERTS_LIST_SUCCESS, TRAVELEXPERTS_LIST_FAIL, TRAVELEXPERTS_LIST_SUCCESS } from "../constants/TravelExpertsConstants";

export const listTravelexperts = (userInfo) => async (dispatch) => {
    try {
      const {data} = await Axios.get('https://ecobanjarabackend.herokuapp.com/api/user/top/influencers', 
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
      const {data} = await Axios.get('https://ecobanjarabackend.herokuapp.com/api/user/saved/influencer',
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