// async function sleep(){
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//             resolve(45)
//        }, 1000);
//     })
// }
console.log(p);
(async function main(){

let a= await sleep()
console.log(a);
let b=await sleep()
console.log(b)
var p=30
})()

const sleep=()=>{
    return new Promise((resolve, reject) => {
       setTimeout(() => {
            resolve(45)
       }, 1000);
    })
}
// when we use const it cant hoisting
// this funtion immediately invoke itself by braket
// IIFE-> Immediately Invoke Function Expression
// IIFE is a javascript function that runs as it is defined
// (function(){
 
// })();
let [x,y]=[1,5,7]
console.log(x,y);
let [a,b, ...rest]=[1,2,3,45,76,89,23]
console.log(a,b,rest);
//... 3dots will be there is rest 
let obj={
    c:4,
    f:3
}
let {c,f}=obj
console.log(f, c)
function sum(u,v,w){
    return u+v+w
}
let arr=[1,2,3]
console.log(sum(arr[0],arr[1],arr[2]))
console.log(sum(...arr));
// ... is spred funtion it will open the arr acess the elements 
const obj2={...arr}
console.log(obj2);
// {0: 1, 1: 2, 2: 3}
var p=30
// hoisting->it refers to the process whereby the interpreter appears to move the declarations to the top of the code before execution
// variables can be referenced before they have been declared
// above var defined later but it will show console as undefined not an error javascript interpriter takes var a and goes upper but dont take the value 30 so it is undefined