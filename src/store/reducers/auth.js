import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../actionTypes'

let initialState = {
    loading: false,
    error: null,
    status: 0
}


export default (state = initialState, action) => {

    switch (action.type) {

        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                status: 1
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error : action.error
            }
        default :
            return state   
    }

}