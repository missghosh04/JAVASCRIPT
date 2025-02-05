let a=[1,93,5,6,88]
// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     console.log(element)
// }
a.forEach((value,index,array)=>{
 console.log(value,index,array)
})
let obj={
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        // hasownproperty only add the objects property it removes any built in property or inherited property
        const element = obj[key];
        console.log(key,element)
    }
}
for (const element of a) {
    console.log(element)
}
