/*
let will have local scope
but here we can access because it is decalared outside (globally) 
*/

let  a=10

//directly
console.log(a);


// inside block
{
    console.log(a);
}



//inside function
name()
function name(params) {
    console.log(a);
}