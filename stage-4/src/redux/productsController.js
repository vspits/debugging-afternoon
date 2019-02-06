import axios from 'axios';

export const getAllProducts = () => {
    return axios.get("https://practiceapi.devmountain.com/products/")
    .then(response => response.data);
}