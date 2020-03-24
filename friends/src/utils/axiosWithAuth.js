import axios from 'axios';

export const axiosWithAuth = () => {
    const token = JSON.parse(localStorage.getItem('token'));

    return axios.create({
        baseURL: 'https://localhost:5000',
        headers: {
            Authorization: token
        }
    });
};