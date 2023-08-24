class Madhu extends Date
{
    getdate()
    {
        console.log("hi");
    }
    constructor()
    {
        super()
    }
}

let a = new Madhu()
console.log(a.getDate());

export default new Madhu()

//module.export= new Madhu()