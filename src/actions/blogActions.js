import Axios from "axios";
import { BLOG_LIST_FAIL, BLOG_LIST_SUCCESS } from "../constants/blogConstants";

export const listBlogs = (userInfo, id) => async(dispatch) => {
    // dispatch({type: LOCATION_DETAILS_REQUEST, payload: id})
    try{
        const {data} = await Axios.get(`https://ecobanjarabackend.herokuapp.com/api/destination/blog/get/${id}`,
        { headers: {
            "x-access-token": `${userInfo.accessToken}`,
        }});
        // console.log(data);
      dispatch({type: BLOG_LIST_SUCCESS, payload: data});
    } catch(error){
      dispatch({type: BLOG_LIST_FAIL, payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,})
    }
}