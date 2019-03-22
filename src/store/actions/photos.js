import {
    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAILURE,
} from '../actionTypes';

import api from '../apis';

export const get_photos = () => {
    return ((dispatch) => {

        dispatch({
            type: GET_PHOTOS_REQUEST
        })
        
        return api.photo.get_photos_now().then(response => {
            console.log('Photo List=>',response.data.slice(0,100));
            dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: response.data.slice(0,100)
            })

        })
        .catch(error => {
            dispatch({
                type: GET_PHOTOS_FAILURE,
                error
            })
        
        })
    })
}    
