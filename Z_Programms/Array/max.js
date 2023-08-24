let arr=[2,3,4,5,62,300,100]
let big=arr[0]
let big2=arr[1]
for(let i=1;i<arr.length;i++){
    if(arr[i]>big){
        big2=big
        big=arr[i]
    }else if(arr[i]>big2){
        big2=arr[i]
    }
}
console.log(big);
console.log(big2);