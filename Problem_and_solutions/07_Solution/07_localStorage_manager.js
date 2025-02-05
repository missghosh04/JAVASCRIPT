// The Local Storage Manager:
//     You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.
function saveNoteToLocalStorage(note){
    localStorage.setItem("note",note)
}

let note=localStorage.getItem("note")
if(note){
document.querySelector(".note").innerHTML=note
}
document.querySelector("button").addEventListener("click",() => {
  let note=prompt("enter your note")
  saveNoteToLocalStorage(note)
  document.querySelector(".note").innerHTML=note
}
)