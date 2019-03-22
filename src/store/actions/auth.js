import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../actionTypes';

export const loginMe = (data) => {
    return ((dispatch) => {

        dispatch({
            type: LOGIN_REQUEST
        })

        if (data.username === "admin" && data.password === "admin") {
            console.log('ok')
            dispatch({
                type: LOGIN_SUCCESS,
                payload: 'login success'
            })
        }
        else {
            console.log('Login Error')
            dispatch({
                type: LOGIN_FAILURE,
                error: 'Invalid login'
            })
        }
    })

}



