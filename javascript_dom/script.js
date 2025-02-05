console.log("helllo world")
console.log( document.body.childNodes)
// NodeList(5) [text, div.container, text, script, text]
// document.body.childNodes[0]
// #text
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[2])
// #text
// document.body.childNodes[1].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// document.body.childNodes[1].childNodes[1]
// let cont =document.body.childNodes[1]
// undefined
// cont.firstChild
// #text
console.log(document.body.childNodes[1].firstElementChild)
console.log(document.body.childNodes[1].lastElementChild)
let cont=document.body.childNodes[1]
cont.firstElementChild.style.backgroundColor="red"
'red'
cont.lastElementChild.style.backgroundColor="red"
'red'
cont.firstElementChild.style.backgroundColor="green"
'green'
console.log(cont.firstElementChild.parentElement)
console.log(document.body.firstElementChild.childNodes)
console.log(document.body.firstElementChild.children)
console.log(document.body.firstElementChild.children[2].previousElementSibling)
// box2
console.log(document.body.firstElementChild.children[3].nextElementSibling)
//box5
console.log(document.body.firstElementChild.children[3].parentElement)
console.log( document.body.children)
// HTMLCollection(3) [div.container, table, script]
console.log(document.body.children[1])
// <table>​…​</table>​
console.log(document.body.children[1].rows)
// HTMLCollection(2) [tr, tr]
