var x = "madhu madhu sudha sudha m"
let z =x.split(" ")

for(var i=0;i<z.length;i++)
{
   var  count =0
    for(var j=0;j<z.length;j++)
    {
        if(z[i]==z[j])
        {
            if(j<i)
            {
                break
            }
            count++
        }
    }
    if(count>=1)
    {
        console.log(z[i]+" ======>"+count);
    }
}