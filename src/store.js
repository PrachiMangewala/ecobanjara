import { applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import { blogListReducer } from './reducers/blogReducers';
import { getCustomItineraryreducer } from './reducers/customItineraryReducers';
import { fixedItineraryListReducer, getItineraryPriceReducer, saveContentReducer, saveFixedItineraryReducer, singleFixedItineraryreducer } from './reducers/fixedItineraryReducers';
import { localsListReducer, savedlocalsListReducer } from './reducers/localsReducers';
import { locationDetailsReducer, locationListReducer, newestlocationListReducer, popularlocationListReducer, savedlocationsListReducer } from './reducers/locationReducers';
import { savedTravelexpertsListReducer, travelexpertsListReducer } from './reducers/travelexpertsReducers';
import { userRegisterReducer, userSigninReducer, usersListReducer, userUpdateProfileReducer } from './reducers/userReducers';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },  
    travelexpertsList: {
        travelexperts: localStorage.getItem('travelexperts')
        ? JSON.parse(localStorage.getItem('travelexperts'))
        : null,
    },  
}

const reducer = combineReducers({
    userRegister: userRegisterReducer,
    userSignin: userSigninReducer,
    locationsList: locationListReducer,
    locationDetails: locationDetailsReducer,
    popularlocationsList: popularlocationListReducer,
    newestlocationsList: newestlocationListReducer,
    localsList: localsListReducer,
    travelexpertsList: travelexpertsListReducer,
    savedLocationsList: savedlocationsListReducer,
    savedTravelExpertsList: savedTravelexpertsListReducer,
    savedLocalsList: savedlocalsListReducer,
    blogsList: blogListReducer,
    usersList: usersListReducer,
    fixedItineraryList: fixedItineraryListReducer,
    singleFixedItinerary: singleFixedItineraryreducer,
    ItineraryPrice: getItineraryPriceReducer,
    userUpdateProfile: userUpdateProfileReducer,
    fixedItineraryDetails: saveFixedItineraryReducer,
    fixedItineraryContent: saveContentReducer,
    customItineraryDetails: getCustomItineraryreducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;