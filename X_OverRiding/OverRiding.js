/*
Giving implementation by taking object as refernce
overriding the function which is present in one object to print the new object created propeties

*/

let a ={
        name :"Madhu",
        age:"20",
        details:function () {
            console.log(`My name is ${this.name} and my age is ${this.age}`);
        }
}
a.details()//My name is Madhu and my age is 20



let b=Object.create(a)
b.name="Aru",
b.age="19"

b.details()//My name is Aru and my age is 19