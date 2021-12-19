import Axios from "axios";
import { SAVE_ENTITY_FAIL, SAVE_ENTITY_SUCCESS } from "../constants/saveentitiesConstants";

export const saveEntity = (userInfo, itemId) => async(dispatch) => {
    try{
        const {data} = await Axios.post('https://ecobanjarabackend.herokuapp.com/api/user/add/saved/entities', {itemId},
        { headers: {
            "x-access-token": `${userInfo.accessToken}`,
        }});
        console.log(data);
        dispatch({ type: SAVE_ENTITY_SUCCESS, payload: data });
    } catch(error) {
        console.log(error);
        dispatch({ type: SAVE_ENTITY_FAIL, 
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message 
    });
    }
};
