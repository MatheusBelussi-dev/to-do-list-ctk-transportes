const axios = require('axios');

const fetchPublicApiData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        return response.data;
    } catch (error) {
        console.error('Error fetching data from public API:', error);
        throw error;
    }
};

module.exports = { fetchPublicApiData };