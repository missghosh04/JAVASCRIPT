let button=document.getElementById("btn")
// List of all mouse events 
//  https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
button.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="<b>yayy you were clicked</b> Enjoy your click!"
})
button.addEventListener("contextmenu",()=>{
    alert("Dont hack us by Right click Please")
})
button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="<b>yayy you were double clicked</b> go to hell"
})
document.addEventListener("keydown",(e)=>{
    console.log(e.key,e.keyCode)
})