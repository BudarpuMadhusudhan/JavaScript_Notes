class Aru
{
   static a= 10

   static {
    console.log(this.a);
   }
   
   hello() {
    console.log(Aru.a);
   }
   
}

new Aru() .hello()