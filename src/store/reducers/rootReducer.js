import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";

import auth from  './auth';
import photo from  './photos';

export default combineReducers({
    auth,
    photo,
    form : formReducer
});

