let arr=[1,2,3,4,5,6]
// index=0 1 2 3 4 5
// arrays are mutable
arr[0]=12 
console.log(arr,typeof arr)
console.log(arr.length)
console.log(arr[4])
console.log(arr.toString())
console.log(arr.join(" and "))
console.log(arr.pop())
// from outside
console.log(arr.push("harry"))
// array is mutatable so you can add any element
// returns new length
console.log(arr.shift())
// removes first element and returns the element pop er vai pop last delete kore r e first element
console.log(arr.unshift())
// adds element in begining and returns new length push er vai same same but different push last e add kore unshift first e
delete arr[0]
// if you delete an element but space will be there memory allocated but no value there
console.log(arr)
let arr2=[1,2,3]
let arr3=[4,5,6]
console.log(arr.concat(arr2,arr3))
// it does not existing array just add them and returns them
console.log(arr.sort())
arr4=[3,4,8,2,1,8]
console.log(arr4.splice(3,3))
// starts from index 3 and takes 3 elemnt outside
// console.log(arr4.splice(3,3,222,333,444))
// after removing three element it places 222,333,444 in that place
console.log(arr4)
console.log(arr4.slice(1,3))
// ending index exclusive starting index inclusive

