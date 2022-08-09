import axios from 'axios';

// axios.defaults.withCredentials = true;
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
// // axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

axios.interceptors.request.use(response => {
    return response
});

axios.interceptors.response.use(
    response => {
        return response
    },
    (error) => {
        console.log(error);
        if (error.response.status === 401) {

        }
        return Promise.reject(error);
    }
);
export default axios;
