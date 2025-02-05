let arr=[1,13,5,7,11]
let newarr=[]
console.log(arr)
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newarr.push(element**2)
    
// }
 newarr=arr.map((element,index,array)=>{
    return element**2
})
console.log(newarr)
const greaterthanseven=(e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterthanseven))
// if filter is true then it pases the value
// console.log(typeof greaterthanseven)
let arr2=[1,2,3,4,5,6]
const add=(a,b)=>{
    return a+b
}
console.log(arr2.reduce(add))
console.log(Array.from("Soumi"))
