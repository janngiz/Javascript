

/* 

callback inside callback is callback hell,

--> it is used in async function which will take the time to return response
*/

//it will give cheese after 2 sec : callback function will give you after cheese prepared
function getCheese(callback){
    console.log("Making cheese...");

    setTimeout( ()=> { console.log("cheese is ready"); callback;}, 2000)
}

//

// it will take cheese and cook dough and return after cooked
function getDough(cheese, callback){}


//it will take dough and it will cook pizza and returns after cooked 
function makePizza(dough, callback){}