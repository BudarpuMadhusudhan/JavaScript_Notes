
async function exe() {

var p = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove("hi")
        reject ("hello")
    },5000)
})

await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})

}

exe()