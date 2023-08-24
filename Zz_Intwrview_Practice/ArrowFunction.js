let a =(ele)=>{console.log("i am ");}
a()//i am 



function madhu(name){
    console.log(this.name=name);
   }




let b = new madhu("Radha")
console.log(b.name);