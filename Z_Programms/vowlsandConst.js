var a ="MAdhu123"
for(var i=0;i<a.length;i++)
{
   let ch=a.charAt(i)
   if(ch>='A'&& ch<='Z'||ch>='a'&&ch<='z')
   {
    if(ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U'||ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
    {
      console.log("vowles are "+ch);
    }
    else
    {
        console.log("consonent "+ch);
    }
}
}