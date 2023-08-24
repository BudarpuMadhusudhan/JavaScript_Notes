/*
One function calling another function is called Call Back Function
We can pass function as paramter to another function
*/
function Madhu(place1,place2) {
    console.log("I am Madhu alias Krishna");
    console.log("i am from "+place1);

}

function Radha(place1,place2) {
    console.log("I am Deeksha alias Radha");
    console.log("i am from "+place2);
}

function love(place1 ,place2,method) {
    method(place1 ,place2)
}

love("Andra","manglore",Madhu)

/****************************************************************************************************************************************/

