var a ='madhusudhan'

for(var i=0;i<a.length;i++)
{
    var count=0 
    for(var j=0;j<a.length;j++)
    {
        if(a.charAt(i)==a.charAt(j))
        {
            if(j<i)
            {
                break
            }
            count++
        }
    }
    if(count>1)
    {
        console.log(a.charAt(i))+count;
    }
}