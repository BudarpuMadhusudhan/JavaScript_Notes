let DaD={
       name : "B Thippeswany",
       age:51,
       details:function () {
        console.log(`Name is ${this.name} and age is ${this.age}`);
       }
       }

       let mom ={
                name:"B Jyothi",
                age:45
       }
       
       function parent(loc,place) {
        console.log(`My Location is ${loc} and place is ${place}`);
       }


       DaD.details()//Name is B Thippeswany and age is 20

       /* using of call()*/
       DaD.details.call(mom)//Name is B Jyothi and age is 20

       /* USING OF bind()*/
       let res=DaD.details.bind(mom)
       res()

       /* Using of apply()*/
       parent.apply(DaD,["hirehal","ap"])
       