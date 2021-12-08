import { applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import { blogListReducer } from './reducers/blogReducers';
import { localsListReducer } from './reducers/localsReducers';
import { locationDetailsReducer, locationListReducer } from './reducers/locationReducers';
import { savelocationsReducer } from './reducers/savelocationsReducers';
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
    savedLocationsList: savelocationsReducer,
    blogsList: blogListReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;