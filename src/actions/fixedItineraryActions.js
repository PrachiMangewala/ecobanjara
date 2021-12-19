import Axios from "axios";
import { FIXEDITINERARY_LIST_FAIL, FIXEDITINERARY_LIST_SUCCESS } from "../constants/fixedItineraryConstants";

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