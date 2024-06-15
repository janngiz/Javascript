

    /*************************************************************** */

    //post api call


    const fetch = require('node-fetch');


    const urlPost = 'https://jsonplaceholder.typicode.com/posts';
    const data = { key1: 'value1', key2: 'value2' };

    
    //// Making the API call

    fetch(urlPost, {
        method: 'post',
        headers:{
            'Content-Type': 'application/json' // Set the content type to JSON
        },
        body: JSON.stringify(data) // Convert data to JSON string
    })
    .then( (response)=> {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        // Parse the JSON from the response
        return response.json();
    })
    .then((data)=> {
        console.log(data);
    })
    .catch(error => {
        // Handle any errors
        console.error('There has been a problem with your fetch operation:', error);
    });

 



    //making api call using aync await

    async function postApi(url, data){

        try {
            
            const response = await fetch(urlPost, {
                method: 'post',
                headers:{
                    'Content-Type': 'application/json' // Set the content type to JSON
                },
                body: JSON.stringify(data) // Convert data to JSON string
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const result = await response.json();
        console.log(result);

        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }

    }

    postApi(urlPost, data);



