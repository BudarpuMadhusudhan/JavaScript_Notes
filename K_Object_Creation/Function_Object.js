
/*here we write constructor as function */
function data(name ,age,place) {
    this.name=name
    this.age=age
    this.place=place
}

let a =new data("madhu",30,"hirehal")
console.log(a.name);
console.log(a.age);


//************************************************************** */
function madhu(status,place,love) {
    this.status=status
    this.place=place
    this.love=love
}

let b=new madhu("madhu","hirehal",function() {return 25})
let c=b.love()
console.log(c);