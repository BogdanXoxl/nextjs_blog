import axios from "axios";

const SEARCH_BASE_URL = 'https://jsonplaceholder.typicode.com';
const limit = 12;
const API = {
    getData: async (model, page, searchTerm='') => {
        const endpoint = `${SEARCH_BASE_URL}/${model}?_limit=${limit}&_page=${page}&q=${searchTerm}`;
        return await axios.get(endpoint);
    },
    getCurrentData: async (model, id) => {
        const img = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`).then(res => res.data);
        const data = await axios.get(`https://jsonplaceholder.typicode.com/${model}/${id}`).then(res => res.data);
        return {img, data};
    },
    getPaths: async model => {
        return await axios.get(`https://jsonplaceholder.typicode.com/${model}`);
    },
    getComments: async postId => {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    }
};


export default API;