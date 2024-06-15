

/* 

callback inside callback is callback hell,

--> it is used in async function which will take the time to return response
*/

//it will give cheese after 2 sec : callback function will give you after cheese prepared
function makeCheese(callback){
    console.log("Making cheese...");

    //1. cheese ready vayo 
    const cheese = "cheese here";


    setTimeout( ()=> { 
        
         callback(cheese);},
          2000)
}

//here inside, setTimeout 1st parameter we pass anonymous function,, there we execute 2 statements 
// we dont execute callback function, immediately so we pass inside function. == idk why








// it will take cheese and cook dough and return after cooked
//i dont care who gives you cheese but, this function needs cheese to process ... and after it get cheese it returns dough 
function makeDough(cheese, callback){
    console.log("Making dough with " + cheese + "...");
    setTimeout( 
        //here whole function implementation is passed, not function decalration
        //setTimeout prebuilt fn takes parameter and do the processing 
        ()=> {
        const dough = "Dough made with " + cheese;
        console.log("Dough is ready!");
        callback(dough); //it returns  dough 

    }, 2000)


}


//it will take dough and it will cook pizza and returns after cooked 
function makePizza(dough, callback){
    console.log("Making pizza with " + dough + "...");
    setTimeout( ()=> {
        const pizza = "Pizza made with " + dough;
        console.log("Pizza is ready! Enjoy your meal!");
        callback(pizza);
    }, 2000)

}








// function call
makeCheese(
    
    //this is parameter, fn implntn pass
    (cheese) => { 

        // function call = statement makeDough()
    makeDough(cheese, (dough) => { 
        makePizza(dough, (pizza) => { 
            console.log("All done!", pizza);
        });
    });


});


/*   calling all the function:: one by one 

1.  makeCheese(callback)  == calling  makeCheese function and passing callback implementation


 --> it is inner function 
 --> this function means you already get cheese now do what you want        


   //here cheese is only identifier or parameter, its value is passed when function is called 
--> (cheese) = {

    }

--> here it is  implementation of calback 


 --> this function is called inside makeCheese() function, once the cheese is ready,,, 
 --> pass the ready cheese in the callback function
 






  2. function makeDough(cheese, callback){}  == calling the makeDough function with cheese parameeter with implementation of callback

   --> this function should be call after cheese function, as we need cheese 



   --> this is inner function fo makeDough() function

    
   --> this function means you already get dough now do what you want        


     //here dough is only identifier or parameter, its value is passed when function is called 
  (dough) => { // Use the cheese to make dough
       
    }

    --> here it is the implementation of callback function, that is called once the dough is ready

    --> this callback function has dough avaialble


    --> you can use dough to make pizza 






    3. function makePizza(dough, callback){} = calling the makePizza function with DOUGH parameeter with implementation of callback

       --> this function should be call after dough function, as we need dough 


        //this function means you already get pizza now do what you want        
    (pizza) => {
            console.log("All done!");
        });


*/