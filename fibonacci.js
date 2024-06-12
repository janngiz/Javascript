
//just remember  anyhow ,, dont need to understand .. fuck it

// 0 1 1 2 3 5 8 13 ...


// using recursion


function fibonacci(n){

        // Base case: 0 or 1, when values become 0 or 1 then the recursion stops
    if(n === 0){
        return 0;
    }

    if(n === 1){
        return 1;
    }

    return fibonacci(n-1) + fibonacci(n-2);


let number = 10; // Change this to get Fibonacci of a different number
 
for (let i = 0; i < number; i++) { 
    console.log(fibonacci(i)); 
};




}