
/* 

1. install axios : npm install axios

2. import and use it :

*/

const axios = require('axios');


const url = 'https://jsonplaceholder.typicode.com/posts';


axios.get(url)
    .then(response => {
        // Handle the response data
        console.log(response.data[0]);
    })
    .catch(error => {
        // Handle any errors
        console.error('There has been a problem with your axios operation:', error);
    });




async function fetchData() {
    try {
        const response = await axios.get(url);
        console.log(response.data[1]);
    } catch (error) {
        console.error('There has been a problem with your axios operation:', error);
    }
}

fetchData();