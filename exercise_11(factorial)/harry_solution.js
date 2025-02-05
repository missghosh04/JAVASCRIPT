let a=5
 function factorial(number){
    let arr=Array.from(Array(number+1).keys())
    console.log(arr)
    let c=arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    return c
 }

 console.log(factorial(a))