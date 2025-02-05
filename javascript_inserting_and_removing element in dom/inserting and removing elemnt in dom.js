document.querySelector(".container").innerHTML
// '\n        <div class="box">Hey i am a box</div>\n  
document.querySelector(".container").innerText
document.querySelector(".container").outerHTML
document.querySelector(".container").textContent
// '<div class="container">\n        <div class="box">Hey i am a box</div>\n    </div>'
// document.querySelector(".container").hidden="true"
console.log(document.querySelector(".container").tagName)
console.log(document.querySelector(".container").nodeName)
document.querySelector(".box").innerHTML="hello soumi"
console.log(document.querySelector(".box").hasAttribute("style"))
console.log(document.querySelector(".box").getAttribute("style"))
console.log(document.querySelector(".box").setAttribute("style","display:inline"))
document.querySelector(".box").attributes
// document.querySelector(".box").removeAttribute("style")
// document.designMode="on"
// then you can edit any web page
// data attributes
console.log(document.querySelector(".box").dataset)
// insertion methods in dom
let div=document.createElement("div")
div.setAttribute("class","created")
div.innerHTML="I have been inseted <b> by harry</b>"
// document.querySelector(".container").append(div)
document.querySelector(".container").before(div)
// container er age add hobe
document.querySelector(".container").after(div)
// container er pore add hobe
document.querySelector(".container").prepend(div)
// container er moddhe first e add hobe
document.querySelector(".container").append(div)
// container er moddhe last e add hobe
let span=document.createElement("span")
div.setAttribute("class","inserted")
span.innerHTML="bujhle maaaaaaaaa ki jani keno asbe?"
div.replaceWith(span)
let cont=document.querySelector(".container")
cont.insertAdjacentHTML("afterend","<b> hey i am under the water please help me here too much raining....")
//beforebegin means before the container html will be added
//afterbegin means html will be added after the container tag but inside the container
//beforeend means html will be added before the end of the container inside container
//afterend means html will be added after the container outside the container
// document.querySelector(".box").remove()
console.log(document.querySelector(".container").classList)
console.log(document.querySelector(".container").className)
document.querySelector(".container").classList.add("yellow")
// document.querySelector(".container").classList.remove("red")
document.querySelector(".container").classList.toggle("yellow")
// khula hain to band kar donge or band hain to khol doge-toggle er kaj