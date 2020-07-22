import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9LB9t5lRBT_nveCEGWdlvImdmdGqMR5YxipQnU8FlTg'
    }
});