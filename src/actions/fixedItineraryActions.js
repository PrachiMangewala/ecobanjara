import Axios from "axios";
import { FIXEDITINERARY_LIST_FAIL, FIXEDITINERARY_LIST_SUCCESS, ITINERARY_PRICE_FAIL, ITINERARY_PRICE_SUCCESS } from "../constants/fixedItineraryConstants";

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