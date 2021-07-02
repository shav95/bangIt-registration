import * as actionTypes from '../actions/types';


const logInReducer = (state={}, action) => {
    if(actionTypes.LOG_IN === action.type) {
        return {
            ...state,
            ...action.payload
        }
    } else {
        return state
    }
}

export default logInReducer;