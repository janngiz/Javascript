

//callback is nth but just passing the function in parameter of another function

// In main function declaration we make the function call of second function

// while main function call, we pass the implementation of second function...





//simple example


/*************************************************************** */

//1.
//a function that greets to people, and takes people name as parameter

function greeting(name){
    console.log("Good afternoon " + name)
}





//2. 
//another function which takes parameter as call function

//here we don't need to define the cb, as js is dynamic language, so we can pass anything in runtime 
function mainProcessCallBack(cb){
    var v = "pawan";
    cb(v);
}


//3. call the mainProcessCallBack function, by passing the full declared function greeting

mainProcessCallBack(greeting);



//4. call the mainProcessCallBack fn, with anonymous fn, = which has no name 
mainProcessCallBack(
    //anonymous fn we need parameter pass bcoz in main fn we have taken one parameter
    (v)=>{
        for(let i=0 ; i<=2 ; i++){
            console.log("this is my own implementation of the function " + v)
        }
    }
);


//5. Anonymous function which has no name so we cannot call the function ,,,, as it has no name
// 4 and 5 are same = 4 is arrow function, 5 is anonymous function

mainProcessCallBack(
    function(v){
        console.log("This is regular anonymous funtion + " + v);
    }
);



/*************************************************************** */

// another callback funtion with timeout

//this is the main function which take callback as parameter
function mainFetchData(cb){

    //lets call the callback function

    //it is lib function, here cb() not done because u dont want to call immediately, its setTimeout fn  rule
    setTimeout(cb, 2000);

}

mainFetchData( ()=> {
    console.log("Data fetched")
});






// similar example, with parameter of callback function

function mainFetchDataV2(cb){
 //   setTimeout(cb("parameter passing"), 2000) = we cannot do this beacuse , it immedialty calls the callback function

 //so we make another anonymous function to stop it 
  setTimeout( ()=> cb("parameter passing"), 2000 );

}


mainFetchDataV2( (p)=>{
    console.log("this is function implementation with parameter : " + p)
})