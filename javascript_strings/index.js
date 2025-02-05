console.log("This is String Tutorial")
let a="Harry";
console.log(a[0]);
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a.length)
let real_name="Harry"
let friend="Rohan"
console.log("his name is "+real_name+" and his friend name is  "+friend)
// Template literals use back tick and doller
console.log(`his name is ${real_name} and his friend name is ${friend}`)
let b="ShivamSh"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1,4))
console.log(b.slice(1))
// 4 not included
console.log(b.replace("Sh","77"))
// if two ocurences only first occurences replaced
console.log(b.concat(a,"Soumi","Bakul"))
// it will add the string behind
console.log(b)
// String is immutable we always have to create new string we can't change the original string
console.log(b.trim())
// trim function removes White Space


