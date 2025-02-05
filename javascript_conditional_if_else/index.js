console.log("hey it is a conditional tutorial")
let age=0
let grace=2
// age+=grace
// console.log(age)
// console.log(age-grace)
// console.log(age*grace)
/*
console.log(age/grace)
console.log(age**grace)
console.log(age%grace)
*/
if (age==18){
    console.log("you can drive")
}
else if(age==0){
    console.log("are you kidding")
}
else{
    console.log("you can't drive")
}
let a=6
let b=8
let c=a>b?(a+b):(a-b);
console.log(c)
/*
translates to:
if(a>b){
let c=a+b
}
else{
a-b
}
*/
switch (a) {
    case 6:
        console.log(a+1)
        break;

    default:
        break;
}
