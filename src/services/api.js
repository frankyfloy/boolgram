// Axios
import axios from 'axios';

const BASE_URL = "https://flynn.boolean.careers/exercises/api/boolgram/";

// Stories API call
export const storiesRequest = () => new Promise((resolve, reject) => {

    axios.get(BASE_URL + 'profiles')
    .then((res) => {
        resolve(res);
    })
    .catch((err) => {
        reject(err);
    });
});

// Posts API call
export const postsRequest = () => new Promise((resolve, reject) => {

    axios.get(BASE_URL + 'posts')
    .then((res) => {
        resolve(res);
    })
    .catch((err) => {
        reject(err);
    });
});
