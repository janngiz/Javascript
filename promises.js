

/* 

video learn

1. complete the topic sarar = unterstand the use cases

2. abstract way ma  write the code

3. implementation can be copy pasted, no issue

*/


/* 

1. create promise
2. return promise

3. use the promise and handle success and failure

--> Promise is a good way to handle asynchronous operation,
it is used to handle success or failure

State
-- pending
-- fulfilled
-- rejected


--> To create a promise object we use constructor

   let promise = new Promise( function(resolve, reject))

   -- constructor takes a function as an argument, that function also takes two function
     resolve function is called incase of success
     whereas reject function is executed incase of failure


*/ 





/*************************************************************** */


//here inside Promise, it is anonymous function no name
//or we can pass ()=>{} arrow function also


//here resolve and reject are identifier or variable for the funtion = no signature
const ticket = new Promise( function (resolve, reject){

    //statements of function

    
/* 
    it is like condition, we check once we get the response from the api call...
    for eg:  if( responseCode == 200)  ? true : fasle;

*/
    const isBoarded = true;

    if(isBoarded){

        resolve(" We are successful"); // we called the resolve function by passing the value
    }else{
        reject("we are failed"); // we called the reject function by passing the value
    }

}

)







//lets use the promise and handle success or failure


        //it also takes arrow function, implementation of resolved function, do whatever with data
ticket.then( (data) => {

    console.log(" Done: ", data)
}
)
.catch ( (data) =>{
    console.log(" fucked: ", data)
})
.finally( ()=>{
    console.log("Ended")
})


/*************************************************************** */





//lets create a pizza returning promises


/* 
1.makeCheese
2.makeDough
3. makePizza
4. execute one by one 

*/


//returns promise of cheese
function makeCheese(){
    console.log("cooking cheese");


    //resolve, reject func variable or idnetifier
    return new Promise( (resolve, reject)=> 
    {
        //take  timeout function as , api call
        setTimeout( ()=>{

            //its like it get cheese from api
            const cheese = "here cheese";

            //if conditon true, get data, resolve otherwise call reject

            
            resolve(cheese) //only one object can pass, if more than you need to create array object
            
        }, 2000)
    }

)}



//returns promise of cheese, takes cheese input
function makeDough(cheese){
    console.log("cooking dough");
    return new Promise( (resolve, reject)=> 
    {
        setTimeout( ()=>{
            const dough =  cheese + " dough ready";
            //resolve(dough) 
            reject("Bad dough");
            
        }, 2000)
    }

)}



//returns promise of pizza, takes dough input
function makePizza(dough){
    console.log("cooking pizza");
    return new Promise( (resolve, reject)=> 
    {
        setTimeout( ()=>{
            const pizza =  dough + " pizza ready";
            resolve(pizza);
        }, 2000)
    }

)}



//Lets call all the function one by one, One thing notice , we have already called resolve() function
// so we need to pass implementaion of resolve, in then function parameter, 
//signature also resolve(cheese)  implementation (cheese)=>{}





//1. then.catch


//here cheese dont take any input, but dough take cheese so, 
makeCheese().then( (cheese)=>{
    console.log("we got ", cheese);
    return makeDough(cheese);
} )
.then( (dough)=> {
    console.log("We got " + dough);
    return makePizza(dough);
})
.then( (pizza)=> {
    console.log("we got "+ pizza)
})
.catch(
    (err) => {
        console.log("damn!" +err)
    }
)

//here : .then.then == it is called function changing, 
// first method is executed and returns something, that is used by second method.... if second method cannot accept the 
//first one return then it will be problem like in java stream
 






//2.  async await

async function cooking(){

    try{

    //it returns promise not real cheese, so await,, it waits
    const cheese = await makeCheese();
    console.log(" cooked "+ cheese);

    const dough = await makeDough(cheese);
    console.log(" cooked "+ dough);


    const pizza = await makePizza(dough);
    console.log(" cooked "+ pizza);

    }catch(err){
        console.log("Damn! ", err);
    }


}


cooking();











