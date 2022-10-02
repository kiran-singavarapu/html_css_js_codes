console.log("Nomal function");
function add()
{
    let a=10;
    let b=20;
    let c=a+b;
    return c;
}
let sum=add();
console.log("Sum vaule is "+sum);

console.log("Using Lambda expression.")
const add1=()=>{
    let a=10;
    let b=20;
    let c=a+b;
    console.log("Sum value is "+c);
}
add1();

displayAddition=(callback)=>{
    setTimeout(()=>
    {console.log("Addition"); 
    callback()
   },1000);} 

displayMultiply=(callback)=>{
    setTimeout(()=>
    {console.log("Multiplication"); 
    callback()
   },3000);}

addition=(a,b)=>{
    console.log(a+b);}

multiply=(a,b)=>{
    console.log(a*b);
}
displayAddition(function (){
    addition(10,10);
})

displayMultiply(function (){
    multiply(10,10);
})


