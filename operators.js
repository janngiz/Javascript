/* 

special symbol used to perform operations on operand

1. assignment operators
  =, +=(addition and assign), -=, %= (get remainder and assign)

2. arithmetic operator
  +, -, *, /, %(remainder or modulus), ++ (increment), --, **(power)

3. comparision operator
 ==(equal to), ===(strictly equal to),  

4. logical operator
5. bitwise operator
6. string operator


 == vs ===    equal to   vs  strictly equal to

  == :
    --> it only compares the value

  === : 
    --> it compares the value and type too
    -- it is more safe to use 
*/



  let a = 2;
  let b = "2";
  console.log(a == b); //true 

  console.log(a === b); //false



