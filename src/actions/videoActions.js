import Axios from "axios";
import { VIDEO_DETAILS_FAIL, VIDEO_DETAILS_SUCCESS } from "../constants/videoConstants";

export const getvideoDetails = (videoId) => async(dispatch) => {
    // dispatch({type: LOCATION_DETAILS_REQUEST, payload: id})
    try{
        const {data} = await Axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyApqa1lV8wnwCtYfznGs3txz-yUzrdalRI`);
        console.log(data);
      dispatch({type: VIDEO_DETAILS_SUCCESS, payload: data});
    } catch(error){
      dispatch({type: VIDEO_DETAILS_FAIL, payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,})
    }
}