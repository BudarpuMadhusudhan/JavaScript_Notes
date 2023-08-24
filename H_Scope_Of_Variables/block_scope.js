
// In block the scope will be limited...... 

{
var a =10
let b=20
const c=30
console.log(a);//local
console.log(b);//local
console.log(c);//local
}
console.log(a);//global   because var as global scope
