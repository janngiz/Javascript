const { default: axios } = require("axios");


const url = 'https://jsonplaceholder.typicode.com/posts';

const data = { title: 'foo', body: 'bar', userId: 1 };

const headers = {
    'Content-Type': 'application/json'
};

axios.post(url, data, {headers})
.then(response => {
    // Use the JSON data
    console.log(response.data);
})
.catch(error => {
    // Handle any errors
    console.error('There has been a problem with your axios operation:', error);
    });