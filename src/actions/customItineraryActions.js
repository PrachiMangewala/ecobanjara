import Axios from "axios";
import { ADD_ITINERARY_DAY_FAIL, ADD_ITINERARY_DAY_SUCCESS, ADD_ITINERARY_SECTION_FAIL, ADD_ITINERARY_SECTION_SUCCESS, GET_COMMENTS_FAIL, GET_COMMENTS_SUCCESS, GET_CUSTOM_ITINERARY_FAIL, GET_CUSTOM_ITINERARY_SUCCESS } from "../constants/customItineraryConstants";

export const getCustomItinerary = (userInfo, customId) => async (dispatch) => {
    try {
      const {data} = await Axios.post('https://ecobanjarabackend.herokuapp.com/api/custom/itinerary/get', {customId}, 
              { headers: {
                  "x-access-token": `${userInfo.accessToken}`,
              }});
      console.log(data);
      dispatch({ type: GET_CUSTOM_ITINERARY_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_CUSTOM_ITINERARY_FAIL, payload: error.message });
    }
}

export const addSectioninItinerary = (userInfo, customId, dayNo, startTime, endTime, description) => async (dispatch) => {
    try {
      const {data} = await Axios.post('https://ecobanjarabackend.herokuapp.com/api/custom/itinerary/add/section', {customId, dayNo, startTime, endTime, description}, 
              { headers: {
                  "x-access-token": `${userInfo.accessToken}`,
              }});
      console.log(data);
      dispatch({ type: ADD_ITINERARY_SECTION_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ADD_ITINERARY_SECTION_FAIL, payload: error.message });
    }
}

export const addDayinItinerary = (userInfo, customId, dayNo) => async (dispatch) => {
    try {
      const {data} = await Axios.post('https://ecobanjarabackend.herokuapp.com/api/custom/itinerary/add/day', {customId, dayNo}, 
              { headers: {
                  "x-access-token": `${userInfo.accessToken}`,
              }});
      console.log(data);
      dispatch({ type: ADD_ITINERARY_DAY_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ADD_ITINERARY_DAY_FAIL, payload: error.message });
    }
}

export const getComments = (userInfo, sectionId) => async (dispatch) => {
    try {
      const {data} = await Axios.post('https://ecobanjarabackend.herokuapp.com/api/custom/itinerary/section/comments/get', {sectionId}, 
              { headers: {
                  "x-access-token": `${userInfo.accessToken}`,
              }});
      console.log(data);
      dispatch({ type: GET_COMMENTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type:  GET_COMMENTS_FAIL, payload: error.message });
    }
}


