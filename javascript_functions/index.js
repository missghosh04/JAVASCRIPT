
function nice(name) {
        console.log("hey "+name+" you are nice!")
        console.log("hey "+name+" you are good!")
        console.log("hey "+name+" your tshirt is nice!")
        console.log("hey "+name+" your course is good!")
}
nice("Rohan")
function sum(a,b,c=3){
    // console.log(a + b)
    return a+b+c
}
result1=sum(36,7)
result2=sum(36,2)
result3=sum(36,4)
console.log("the sum of this number is: ",result1)
console.log("the sum of this number is: ",result2)
console.log("the sum of this number is: ",result3)
const func1=(x)=>{
    console.log("I am an arrow function",x)
}
func1(34)
func1(66)
func1(23)