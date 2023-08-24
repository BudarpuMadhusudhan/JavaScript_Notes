/*
Closure is a feature of java script that allows inner function to access the outer scope of a function
Inner function is declared inside outer function,
whenver outer function is called it defines the inner function
Since the inner function is defined it captures the members which are declared in its lexical scope or parent scope
even the outer function finished its exceution then also inner function will uses the members which are declared in outer scope
we can achieve data hiding here 
*/
function outer(params) {
    var a =10
    console.log("i am outer");

     function inner(params) {
        console.log(++a);
     }

     return inner
}

var res=outer()//i am outer
res()//11
res()//12
