import axios from 'axios';

const instance= axios.create({
    baseURL: 'https://mypizza-98d5c-default-rtdb.firebaseio.com/'
});

export default instance;