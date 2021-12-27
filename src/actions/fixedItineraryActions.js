import Axios from "axios";
import { FIXEDITINERARY_LIST_FAIL, FIXEDITINERARY_LIST_SUCCESS, FIXED_ITINERARY_SAVE_FAIL, FIXED_ITINERARY_SAVE_SUCCESS, GET_FIXED_ITINERARY_FAIL, GET_FIXED_ITINERARY_SUCCESS, ITINERARY_PRICE_FAIL, ITINERARY_PRICE_SUCCESS, SAVE_CONTENT_FAIL, SAVE_CONTENT_SUCCESS } from "../constants/fixedItineraryConstants";

export const listFixedItinerary = (userInfo) => async (dispatch) => {
    try {
      const {data} = await Axios.get('https://ecobanjarabackend.herokuapp.com/api/fixed/itinerary/user/all', 
              { headers: {
                  "x-access-token": `${userInfo.accessToken}`,
              }});
      console.log(data);
      dispatch({ type: FIXEDITINERARY_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FIXEDITINERARY_LIST_FAIL, payload: error.message });
    }
}

export const getsingleFixedItinerary = (userInfo, itineraryId) => async (dispatch) => {
    try {
    console.log(itineraryId);
    console.log(userInfo.accessToken);
      const {data} = await Axios.get(`https://ecobanjarabackend.herokuapp.com/api/fixed/itinerary/single/${itineraryId}`, 
              { headers: {
                  "x-access-token": `${userInfo.accessToken}`,
              }});
      console.log(data);
      dispatch({ type: GET_FIXED_ITINERARY_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_FIXED_ITINERARY_FAIL, payload: error.message });
    }
}

export const getItineraryPrice = (userInfo, userId, destinations, trip, type) => async(dispatch) => {
    try{
        const {data} = await Axios.post('https://ecobanjarabackend.herokuapp.com/api/itinerary/price', {userId, destinations, trip, type},
        { headers: {
            "x-access-token": `${userInfo.accessToken}`,
        }});
        console.log(data);
        dispatch({ type: ITINERARY_PRICE_SUCCESS, payload: data });
    } catch(error) {
        dispatch({ type: ITINERARY_PRICE_FAIL, 
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message 
    });
    }
};

export const saveFixedItinerary = (userInfo, destinations, itineraryName, trip, description) => async(dispatch) => {
    try{
        const {data} = await Axios.post('https://ecobanjarabackend.herokuapp.com/api/fixed/itinerary/add', {destinations, itineraryName, trip, description},
        { headers: {
            "x-access-token": `${userInfo.accessToken}`,
        }});
        console.log(data);
        dispatch({ type: FIXED_ITINERARY_SAVE_SUCCESS, payload: data });
    } catch(error) {
        dispatch({ type: FIXED_ITINERARY_SAVE_FAIL, 
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message 
    });
    }
};

export const saveContent = (userInfo, itineraryId, dayNo, title, description) => async(dispatch) => {
    try{
        const {data} = await Axios.post('https://ecobanjarabackend.herokuapp.com/api/fixed/ititnerary/add/content', {itineraryId, dayNo, title, description},
        { headers: {
            "x-access-token": `${userInfo.accessToken}`,
        }});
        console.log(data);
        dispatch({ type: SAVE_CONTENT_SUCCESS, payload: data });
    } catch(error) {
        dispatch({ type: SAVE_CONTENT_FAIL, 
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message 
    });
    }
};