import * as actionTypes from './types';
import sign from '../../apis/sign';

export const register = (formValues, setRegErrors, setRegDone) => async dispatch => {
    const response = await sign.post("/Register", { ...formValues }).catch((err) => {
        setRegErrors(err)
    });

    if(response) {
        setRegErrors(true)
        setRegDone(true)
    } else {
        return
    }

    dispatch({ type: actionTypes.REGISTRATION, payload: response.data });
}

export const logIn = (formValues, setIsAuth, setErrorMessage) => async dispatch => {
    const response = await sign.post("/Login", { ...formValues }).catch(err => {
        setErrorMessage(err)
    });

    if(!response) {
        return
    }
    
    if(response.data && response.data.data.token) {
        localStorage.setItem('token', response.data.data.token)
        setIsAuth(true)
    }

    dispatch({type: actionTypes.LOG_IN, payload: response.data})
}

export const logOut = (setIsAuth) => dispatch => {
    localStorage.removeItem("token");
    setIsAuth(false);
}