import axios from 'axios';

let _header = {
    'Content-Type': 'application/json'
}

export function get_photos_now(){
    return axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/photos',
        headers: _header
    }).then(function (res) {
        return res;
    }).catch(function (err) {
        throw err;
    })
}