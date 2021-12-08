import Axios from "axios";
import { LOCALS_LIST_FAIL, LOCALS_LIST_SUCCESS } from "../constants/localsConstant";

export const listLocals = (userInfo) => async (dispatch) => {
    try {
      const {data} = await Axios.get('https://ecobanjarabackend.herokuapp.com/api/user/top/locals', 
              { headers: {
                  "x-access-token": `${userInfo.accesstoken}`,
              }});
      // console.log(data);
      dispatch({ type: LOCALS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: LOCALS_LIST_FAIL, payload: error.message });
    }
  }