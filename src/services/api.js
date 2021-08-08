// Axios
import axios from 'axios';
import authentication from '@/store/welcome/authentication';

//********************* AXIOS interceptors **********************
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8000';
axios.defaults.baseURL = "http://localhost:8000/api/";

axios.interceptors.response.use(undefined, function(error) {
    if (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            authentication.actions.disconnect();
            console.log("NON AUTORIZZATO 401");
        }
    }
});
// -------------------------------------------------------------

// Login API call
export const authRequest = (user) => new Promise((resolve, reject) => {
    axios.post(axios.defaults.baseURL + 'auth/login', {
        ...user
    })
    .then((res) => {
        axios.defaults.headers.common['Authorization'] = "Bearer " + res.data.user.access_token;
        console.log("token : " + axios.defaults.headers.common['Authorization']);
        resolve(res);
    })
    .catch((err)  => {
        reject(err);
    });
});

// Stories API call
export const storiesRequest = () => new Promise((resolve, reject) => {
    axios.get(axios.defaults.baseURL + 'profiles')
    .then((res) => {
        resolve(res);
    })
    .catch((err) => {
        reject(err);
    });
});

// Posts API call
export const postsRequest = () => new Promise((resolve, reject) => {
    axios.get(axios.defaults.baseURL + 'posts')
    .then((res) => {
        resolve(res);
    })
    .catch((err) => {
        reject(err);
    });
});
