import * as actionTypes from '../actions/types';


const signUpReducer = (state={}, action) => {
    if(actionTypes.REGISTRATION === action.type) {
        return {
            ...state,
            ...action.payload
        }
    } else {
        return state
    }
}

export default signUpReducer;