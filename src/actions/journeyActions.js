import Axios from "axios";
import { JOURNEY_LIST_FAIL, JOURNEY_LIST_SUCCESS } from "../constants/journeyConstants";
import dotenv from 'dotenv';
dotenv.config();

export const listJourneys = (userInfo) => async (dispatch) => {
    try {
      const {data} = await Axios.get(process.env.REACT_APP_API_ENDPOINT + '/api/journey/user', 
              { headers: {
                  "x-access-token": `${userInfo.accessToken}`,
              }});
      console.log(data);
      dispatch({ type: JOURNEY_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: JOURNEY_LIST_FAIL, payload: error.message });
    }
}