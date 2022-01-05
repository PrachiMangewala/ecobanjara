import Axios from "axios";
import { ADD_LOCATION_FAIL, ADD_LOCATION_SUCCESS, LOCATION_DETAILS_FAIL, LOCATION_DETAILS_SUCCESS, LOCATION_LIST_FAIL, LOCATION_LIST_SUCCESS, NEWEST_LOCATION_LIST_FAIL, NEWEST_LOCATION_LIST_SUCCESS, POPULAR_LOCATION_LIST_FAIL, POPULAR_LOCATION_LIST_SUCCESS, SAVED_LOCATION_LIST_FAIL, SAVED_LOCATION_LIST_SUCCESS } from "../constants/locationConstants";

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

export const listPopularLocations = (userInfo) => async (dispatch) => {
  try {
    const {data} = await Axios.get('https://ecobanjarabackend.herokuapp.com/api/destination/popular', 
            { headers: {
                "x-access-token": `${userInfo.accessToken}`,
            }});
    dispatch({ type: POPULAR_LOCATION_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POPULAR_LOCATION_LIST_FAIL, payload: error.message });
  }
}

export const listNewestLocations = (userInfo) => async (dispatch) => {
  try {
    const {data} = await Axios.get('https://ecobanjarabackend.herokuapp.com/api/destination/newest', 
            { headers: {
                "x-access-token": `${userInfo.accessToken}`,
            }});
    dispatch({ type: NEWEST_LOCATION_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: NEWEST_LOCATION_LIST_FAIL, payload: error.message });
  }
}

export const detailsLocation = (userInfo, id) => async(dispatch) => {
  // dispatch({type: LOCATION_DETAILS_REQUEST, payload: id})
  // console.log(id);
  try{
      const {data} = await Axios.get(`https://ecobanjarabackend.herokuapp.com/api/destination/single/${id}`,
      { headers: {
          "x-access-token": `${userInfo.accessToken}`,
      }});
      // console.log(data);
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

export const addDestination = (userInfo, name, city, state, address, about, videos, geography, category, images) => async(dispatch) => {
  try{
      const {data} = await Axios.post('https://ecobanjarabackend.herokuapp.com/api/destinations/add', {name, city, state, address, about, videos, geography, category, images},
      { headers: {
          "x-access-token": `${userInfo.accessToken}`,
      }});
      console.log(data);
    dispatch({type: ADD_LOCATION_SUCCESS, payload: data});
  } catch(error){
    dispatch({type: ADD_LOCATION_FAIL, payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message,})
    console.log(error);
  }
}