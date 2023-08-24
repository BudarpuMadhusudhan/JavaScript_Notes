/*
its ES6 feature 
Arrow function is ananymous function 
we can pass arrow function as parameter to any other function also
we can remove the curly braces and paranthesis if we have single line of code
no need to use return keyword while exceuting single line of code that should be in parenthesis()

Disadvantage
We cannot us this arrow function for the cretion of construtor function
*/
 let  z =()=>{
    console.log("i am Arrow Function");
 }
 z( )


//no need to use return keyword while exceuting single line of code that should be in parenthesis()
let x =(a,b)=>(a+b)
console.log(x(10,20));



