let details={
              name:"Sudhan",
              age:26,
              place:"Banglore",
              deatils:function ()
              {
              console.log(`I am Sudhan of Banglore ${this.age} ${this.places}`);
              },

              person:{
               name :"Madhusudhan"
              }
            }

           console.log(details);
           console.log( details.deatils);