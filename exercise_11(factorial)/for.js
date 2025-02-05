let n=prompt("enter your number")
function factorial(n){
let fact=1
if(n==0){
    return 1;
}
else if(n==-1){
    alert(`invalid input`)
}
for (let i = n; i >0; i--) {
     fact*=i
}
return fact
}
alert(`factorial of ${n} is ${factorial(n)}`)