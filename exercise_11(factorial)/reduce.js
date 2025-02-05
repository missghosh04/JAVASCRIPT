let n=prompt("enter your number")
function factorial(n){
let arr=[]
if(n==0){
    return 1;
}
else if(n==-1){
    alert(`invalid input`)
}
for (let i = n; i >0; i--) {
    arr[i]=i;
    
}
// console.log(arr)
const multiply=(a,b)=>{
   return a*b
}
return arr.reduce(multiply)
}
alert(`The factorial of ${n} is ${factorial(n)}`)
