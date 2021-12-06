import Axios from "axios";
import { useSelector } from "react-redux";
import { LOCATION_DETAILS_FAIL, LOCATION_DETAILS_REQUEST, LOCATION_DETAILS_SUCCESS, LOCATION_LIST_FAIL, LOCATION_LIST_SUCCESS, SAVE_LOCATION } from "../constants/locationConstants";

export const listLocations = () => async (dispatch) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  try {
    const {data} = await Axios.get('https://ecobanjarabackend.herokuapp.com/api/destinations/all', 
            { headers: {
                "x-access-token": `${userInfo.accesstoken}`,
            }});
    dispatch({ type: LOCATION_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOCATION_LIST_FAIL, payload: error.message });
  }
}

export const detailsLocation = (id) => async(dispatch) => {
  dispatch({type: LOCATION_DETAILS_REQUEST, payload: id})
  try{
    Axios.post('https://ecobanjarabackend.herokuapp.com/api/destination', id)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    // dispatch({type: LOCATION_DETAILS_SUCCESS, payload: res});
  } catch(error){
    dispatch({type: LOCATION_DETAILS_FAIL, payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message,})
  }
}

export const saveLocation = (locationId) => async(dispatch) => {
    const {data} = await Axios.get(`https://ecobanjarabackend.herokuapp.com/api/destination/${locationId}`);
    dispatch({
        type: SAVE_LOCATION, payload: data
    });
}