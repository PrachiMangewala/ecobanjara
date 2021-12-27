import Axios from "axios";
import { GET_CUSTOM_ITINERARY_FAIL, GET_CUSTOM_ITINERARY_SUCCESS } from "../constants/customItineraryConstants";

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