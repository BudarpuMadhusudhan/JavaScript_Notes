//usually this for in loop works like if u give i u get only the index number (for more better calirty check for of)
var a =[5,"madhu",20]
for(var i in a)
{
    console.log(i+" "+a[i]); //0 5      1 madhu     2 20   
}

// it main feature is it will skip the index value
var a =[5, ,"madhu",20]
for(var i in a)
{
    console.log(i+" "+a[i]); //0 5      2 madhu        3 20
}
