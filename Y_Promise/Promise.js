/*
Promise is an object which manage javascript asynochrouns behaviour 
there are 3 stages
1.pending
2.reslove or successfull
3.reject

methods in promise
reslove:if the promise is success relosve method will be invoked.
reject: if the promise is unsccessfull reject method will be invoked

Promise will be reslove with the help of async and await keyword
then(),catch(),finally() are the methods of promise object
then():will handle succesfull promise
catch():will handle unsuccesfull promise
finally():either promise success or unsuccess this method will get exceuted
*/

async function exceute() 
{
let p = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        console.log("good morning");
        reslove("HI"),
        reject("hello")
    },2000)
})
await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
console.log("Bye");
}

exceute()