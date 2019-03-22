import {
    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAILURE,
} from '../actionTypes';

let initialState = {
    loading: false,
    error: null,
    photos : null
}


export default (state = initialState, action) => {

    switch (action.type) {

        case GET_PHOTOS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_PHOTOS_SUCCESS:
            return {
                ...state,
                loading: false,
                photos : action.payload
            }

        case GET_PHOTOS_FAILURE:
            return {
                ...state,
                loading: false,
                error : action.error
            }
        default :
            return state   
    }

}