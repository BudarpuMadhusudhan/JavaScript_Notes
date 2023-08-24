var  a="www.@@@"
let result="";
for(var i=0;i<a.length;i++)
{
    let ch=a.charAt(i)
    if(ch>='A'&& ch<='Z'||ch>='a'&&ch<='z')
    {
      result=result+ch;
    }
}

console.log(result);