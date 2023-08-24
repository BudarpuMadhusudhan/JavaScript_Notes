var a = [1,2,3,4,5,6]
var b=[]
for(var i=0;i<a.length;i++)
{
    if(a[i]%2==1)
    {
    b.push(a[i])
    }
}
console.log(b);