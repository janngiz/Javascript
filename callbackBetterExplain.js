


/* 
#identifier is a unique name created by the programmer to define a variable, structure, class, or function



Understanding the call back aajai properly


1. function mainFetchDataV2(cb){}
  --> here cb is identifier or parameter variable of main Funtion.... == function ko signature chaidaina eslai 


2.    setTimeout( ()=> cb("parameter passing"), 2000 );
--> here cb("parameter passing")   == it is a function call... yeha bata call vaxa 
 -- function ko signature esma define hunxa 

 --> function call grda, parameter k pass grna vnyrw ni tw dina  paryo ni 






3. (p)=>{console.log("this is function implementation with parameter : " + p)
--> here main == function implementation is given 
 -- esma tw, signature huna nai vaihalyo, kati wota parameter linxa, k k grna vnyrw

 -- parameter ko value tw == passes from where the function is called 

*/


function mainFetchDataV2(cb){
    //   setTimeout(cb("parameter passing"), 2000) = we cannot do this beacuse , it immedialty calls the callback function
    //so we make another anonymous function to stop it 

     setTimeout( ()=>
         cb("parameter passing"), 2000 );
   
   }
   
   
   mainFetchDataV2( (p)=>{
       console.log("this is function implementation with parameter : " + p)
   })