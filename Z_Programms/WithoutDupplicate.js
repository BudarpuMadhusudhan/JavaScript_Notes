var a ="Hi How"

for(var i=0;i<a.length;i++)
{
    var count =0
    for(var j=0;j<a.length;j++)
    {
        if(a[i]==a[j])
        {
            if(j<i)
            {
               break
            }
            count++
        }
    }
    if(count>=1)
    console.log(a[i]);
}