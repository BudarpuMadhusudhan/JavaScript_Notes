/*
The process of binding the data with the function inorder to validate and control the data
here Data Hiding is done by making data(variable)private [With the help of # ]
and provinding getter and setter method 
*/

class Aru
{
    #enquiry ="Unable to booking"

    getEnquiry()
    {
        return this.#enquiry
    }

    setEnquiry(enquiry)
    {
        this.#enquiry=enquiry
    }
}

let a = new Aru()
console.log(a.enquiry);//undefiend
console.log(a.getEnquiry());
a.setEnquiry("Refund")
console.log(a.getEnquiry());

