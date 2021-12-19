import Axios from "axios";
import { LOCATION_DETAILS_FAIL, LOCATION_DETAILS_SUCCESS, LOCATION_LIST_FAIL, LOCATION_LIST_SUCCESS, SAVED_LOCATION_LIST_FAIL, SAVED_LOCATION_LIST_SUCCESS } from "../constants/locationConstants";

export const listLocations = (userInfo) => async (dispatch) => {
  try {
    const {data} = await Axios.get('https://ecobanjarabackend.herokuapp.com/api/destinations/all', 
            { headers: {
                "x-access-token": `${userInfo.accessToken}`,
            }});
    dispatch({ type: LOCATION_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOCATION_LIST_FAIL, payload: error.message });
  }
}

export const detailsLocation = (userInfo, id) => async(dispatch) => {
  // dispatch({type: LOCATION_DETAILS_REQUEST, payload: id})
  try{
      const {data} = await Axios.get(`https://ecobanjarabackend.herokuapp.com/api/destination/single/${id}`,
      { headers: {
          "x-access-token": `${userInfo.accessToken}`,
      }});
      console.log(data);
    dispatch({type: LOCATION_DETAILS_SUCCESS, payload: data});
  } catch(error){
    dispatch({type: LOCATION_DETAILS_FAIL, payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message,})
  }
}

export const getsavedLocations = (userInfo) => async(dispatch) => {
  try{
      // console.log(userInfo.accessToken);
      const {data} = await Axios.get('https://ecobanjarabackend.herokuapp.com/api/user/saved/destinations',
      { headers: {
          "x-access-token": `${userInfo.accessToken}`,
      }});
      console.log(data);
    dispatch({type: SAVED_LOCATION_LIST_SUCCESS, payload: data});
  } catch(error){
    dispatch({type: SAVED_LOCATION_LIST_FAIL, payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message,})
  }
}