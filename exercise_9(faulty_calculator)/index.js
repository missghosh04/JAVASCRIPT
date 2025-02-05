let random= Math.random()
console.log(random)
let a=prompt("Enter the first number")
let c=prompt("enter the operation")
let b=prompt("enter the second number")
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}
if(random>0.1){
    alert(`The resut is ${eval(`${a}${c}${b}`)}`)
}
else{
    c=obj[c]
    alert(`The resut is ${eval(`${a}${c}${b}`)}`)
}
// open in chrome
