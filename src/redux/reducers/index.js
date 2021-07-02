import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
import logInReducer from './logInReducer';

export default combineReducers({
    registration: signUpReducer,
    logIn: logInReducer 
})