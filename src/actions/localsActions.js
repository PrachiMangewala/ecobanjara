import Axios from "axios";
import { useSelector } from "react-redux";
import { LOCALS_LIST_FAIL, LOCALS_LIST_REQUEST, LOCALS_LIST_SUCCESS } from "../constants/localsConstant";

export const listLocals = () => async (dispatch) => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    dispatch({
      type: LOCALS_LIST_REQUEST
    });
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