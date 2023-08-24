var s = 'Madhusudhan'
for(var i=0;i<s.length;i++)
{
    var count=0
    for(var j=0;j<s.length;j++)
    {
        if(s.charAt(i)==s.charAt(j))
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
        console.log(s.charAt(i));
    }
}