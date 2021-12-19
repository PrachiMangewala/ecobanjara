// import { SAVE_LOCATION } from "../constants/locationConstants";

// export const savelocationsReducer = (state = { savedLocations:[]}, action ) => {
//     switch(action.type) {
//         case SAVE_LOCATION:
//             const item = action.payload;
//             console.log(item);
//             // const existItem = state.savedLocations.find(x => x._id === item._id);
//             // if(existItem) {
//             //     return {
//                     // ...state,
//             //         savedLocations: state.savedLocations.map( x => 
//             //             x._id === existItem._id? item : x
//             //         ),
//             //     };
//             // } else {
//             //     return {...state, savedLocations: [...state.savedLocations, item ]};
//             // }
//             return {...state, savedLocations: [...state.savedLocations, item ]};
//         default:
//             return state;
//     }}