
// here we get index value while we pass i 
var a =[10,20,30]
for(var i of a)
{
console.log(i);//10 20 30
}

//here it wont skip the empty value it gives undefined
var a =[10,20, ,30]
for(var i of a)
{
console.log(i);//10 20 undefined 30
}