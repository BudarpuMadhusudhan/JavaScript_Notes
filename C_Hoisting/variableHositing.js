//Hoisting is JavaScrpit mechanism where variable and function decalration we be moved to top before code exceution

/*
Purpose
We can use the variable before decalration
*/


//In case of var we get undefined
console.log(a);
var a =10

//In case of let we get Reference Error : cannot access without initilization
console.log(b);
let b=10;

//In case of const we get Refernce Error: cannot acces without initilization
console.log(c);
const c=10


