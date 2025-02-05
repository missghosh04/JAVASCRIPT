// console.log("hello")
// // alert("who are you?")
// console.dir(window.document);
let mail=document.getElementById("email");
console.log(mail.value);
var submit=document.querySelector("#submit");
submit.addEventListener("click",()=>{
    console.log(mail.value);
})
