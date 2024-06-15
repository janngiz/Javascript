


/* 
The error you encountered occurs because fetch is a Web API that is not natively available in Node.js. 
To use fetch in a Node.js environment, you need to use a library that provides similar functionality, such as node-fetch or axios.

command : npm install node-fetch

1. it will install the node-modules what contains the fetch lib
2. const fetch = require('node-fetch');


 import this to run the fetch


*/



/*************************************************************** */


//Example of promise == revision == simple

const prm = new Promise((resolve, reject)=>{
    const isBoarded = false;

    if(isBoarded){

        resolve(" We are successful"); // we called the resolve function by passing the value
    }else{
        reject("we are failed"); // we called the reject function by passing the value
    }
})

prm.then( (response)=> {
    console.log("pawan");
    console.log("true:", response)
})
.catch((err) => {
    console.log("fasle", err)
}) 



/*************************************************************** */




const fetch = require('node-fetch');






const url = "https://jsonplaceholder.typicode1.com/posts";


//make url call. Return promise, then has implementation of resolve and catch has reject method 
 fetch(url)
.then( (response)=> {

    //implementation of resolve
    console.log("pawan");

    //it means you get resolve but the response has error... second level handling
    if(!response.ok){
        throw new Error('Network response was not ok ' + response.statusText);
    }

    //it means you get data and , passing for the second then method.... chaining
    return response.json();

    
}).then( (data)=> {
    //we now data is in list or json so,
    
    console.log(data[0]);
})
.catch( (err)=>{
    console.log("gurung")
}) 






    /*************************************************************** */




//Use aync await::  to use fetch api

async function apicall(){

    try {

        //await converts promise to actual respone
        const responsePromise = await fetch(url);

        //we get response and we are validating the response
        if(!responsePromise.ok){
            throw new Error('Network response was not ok ' + response.statusText);

        }
         const json =   await responsePromise.json();
        console.log(json[0])
        
    } catch (error) {
        console.log("error: ", error)

    }

}


apicall();


