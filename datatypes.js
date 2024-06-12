


/*    shift + alt + a == multicomment 


datatypes == u need to remember

1. primitive :
  --> number:  both integers and floating-point numbers.
        Unlike Java, JavaScript does not have distinct data types for different kinds of numeric values like int, float, double, and long. 
        Instead, JavaScript's Number type is used for all numeric values, regardless of their precision or range.

  --> String : textual data enclosed within single quotes ('') or double quotes ("").
  --> boolean : logical value, either true or false.
  --> null :   initialize variable with null,  absent of value in variable
  --> undefined: uninitialized value or a variable that has not been assigned a value. 
  --> symbol:
    Purpose: Symbol is a primitive data type introduced in ECMAScript 6 (ES6). It represents a unique identifier,
     providing a way to create property keys that are guaranteed to be unique.

    No Literal Syntax: Unlike other primitive types like strings and numbers, Symbol does not have a literal syntax.

            // Creating symbols
        const symbol1 = Symbol('description');
        const symbol2 = Symbol('description');

        console.log(symbol1 === symbol2); // Output: false (each symbol is unique)

  --> bigint:
    Purpose: BigInt is a built-in object and data type introduced in ECMAScript 2020.
     It is used for representing arbitrarily large integers beyond the range of the Number type.

            // Creating BigInts
        const bigInt1 = BigInt(9007199254740991); // Using constructor
        const bigInt2 = 12345678901267890n; // Using literal syntax






  2. Non-Primitive (Reference) Data Types:
     These data types are not directly stored in the variable but instead store references of their memory locations

--> Object: represents  a collection of key-value pair, most versatile data types in js
--> array : collection of elements (can be anything)
--> Function : block of code, that can be called from other places

--> Date : represents dates and times. In JavaScript, Date is a built-in object type used to work with dates and times. 
    --> it is built in object,which has methods too,  not normal object, 
    const currentDate = new Date();
    const specificDate = new Date('2022-01-01T12:00:00');
    const year = specificDate.getFullYear();





--> RegExp:  regexp is itself is not a string, because it is not enclosed with in single or double quotes
    const re = /\w+/;
   
    // OR we can create object by passing string form
    const re = new RegExp("\\w+");


--> Map: it is object  type : let map = new Map(); 
--> Set: same : let set = new Set(); // Set




*/


let a = 23.6;

console.log("The value of a is ", a)
console.log("The type of a is ", typeof(a))

console.log("********************");



 a = "23.6"
 a += 88

console.log("The value of a is ", a)
console.log("The type of a is ", typeof(a))
console.log("********************");



//2. type conversion:

/* 
1. Number()
2. String()
3. Boolean()

Js consider 0 as false and all positive or negative  numbers are true. -1 or 1 , 2 , 3 = true
if we convert true as number then it will convert to true
*/

let b = -50;
 b = Boolean(b);
 
console.log("The value of b is ", b)
console.log("The type of b is ", typeof(b))
console.log("********************");


 b = Number(b)
 
console.log("The value of b is ", b)  // here 50 changed to true and changed to 1
console.log("The type of b is ", typeof(b))
console.log("********************");


/* 
String() takes null  and undefined and converts  them to string
In js,  undefined, null, 0, NaN,  converts to false, all other values give true

NaN = not a number : if you try to convert alphabet to number then it converts into NaN
*/



let c = undefined;
 c = Boolean(c);
 
console.log("The value of c is ", c)
console.log("The type of c is ", typeof(c))
console.log("********************");


let d = undefined;
 d = Number(d);
 
console.log("The value of d is ", d)
console.log("The type of d is ", typeof(d))  // it shows number but actually it is not a number
console.log("********************");


