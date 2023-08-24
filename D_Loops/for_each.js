// it has syntax of arrow function

var a =[10,20,30,40]
a.forEach(ele=>{
    console.log(ele);//10 20 30 40 
})

// it will skip the empty value
var a =[10,,30,40]
a.forEach(ele=>{
    console.log(ele);//10 30 40
})