console.log("harry")
// let boxes=document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor="red"
// document.getElementById("redbox").style.backgroundColor="blue"
document.querySelector(".box").style.backgroundColor="green";
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="red";
})
console.log(document.getElementsByTagName("div"))
e=document.getElementsByTagName("div")
// e[4].matches("#redbox")
// true
console.log( e[2].matches("#redbox"))
// false
// e[3].closest("#redbox")
// null
// e[2].closes
// undefined
// e[2].closest("#redbox")
// null
console.log(e[2].closest(".container"))
// e[2].closest(".box")
// <div class=​"box" style=​"background-color:​ red;​">​Bhupendr Jogi 1.5​</div>​
// e[3].closest("html")
// returns html
e=document.getElementsByTagName("div")
// HTMLCollection(8) [div.container, div.box, div.box, div.box, div#redbox.box, div.box, div.box, div.box, redbox: div#redbox.box]
console.log(document.querySelector(".container").contains(e[2]))
// true
document.querySelector(".container").contains(e[0])
// true
document.querySelector(".container").contains(document.querySelector("body"))
// false
document.querySelector("body").contains(document.querySelector(".container"))
// true