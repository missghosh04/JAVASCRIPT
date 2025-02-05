console.log("hi i am tutorial of loops")
let a=1;
// console.log(a)
for (let i = 0; i < 100; i++) {
    console.log(a+i)
    
}
let obj={
    name:"Harry",
    role:"programmer",
    company:"CodewithHarry AI"
}
for (const key in obj) {
    const element=obj[key];
        console.log(key,element) 
}
for (const char of "harry") {
    console.log(char)
}
let p=1
while (p<60) {
    console.log(p)
    p++
}
let q=2
do {
    console.log(q)
    q++
} while (q<1);
// in do while loop first time loop will be run then check the condition if true again enter the loop if false out from the loop
