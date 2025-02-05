// random number generate between a and b formula
// a+random(b-a)
// a=0
// b=255
// rgb range 0 to 255
// to get in integer use math.ceil method or math.floor
function getrandomcolor(){
    let val1=Math.ceil(0+Math.random()*(255-0+1))
    let val2=Math.ceil(0+Math.random()*(255-0+1))
    let val3=Math.ceil(0+Math.random()*(255-0+1))
    return `rgb(${val1},${val2},${val3})`
}
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor=getrandomcolor()
    e.style.color=getrandomcolor()
}) 
