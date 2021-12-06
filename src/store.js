import { applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import { localsListReducer } from './reducers/localsReducers';
import { locationDetailsReducer, locationListReducer, saveLocationReducer } from './reducers/locationReducers';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },  
    savedLocationsList: {
        savedLocations: localStorage.getItem('savedLocations')
        ? JSON.parse(localStorage.getItem('savedLocations'))
        : null,
    }  
}

const reducer = combineReducers({
    userRegister: userRegisterReducer,
    userSignin: userSigninReducer,
    locationsList: locationListReducer,
    locationDetails: locationDetailsReducer,
    localsList: localsListReducer,
    savedLocationsList: saveLocationReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;