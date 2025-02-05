// The Local Storage Manager:
//     You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

if(localStorage.getItem("name")){
    a=localStorage.getItem("name")
    document.write("Welcome "+a)
    // write key word used to write the value in documente
}
else{
    let l=prompt("Enter your name")
    localStorage.setItem("name",a)
    // name will  set  in local storage
}
l={
    harry:1,
    Soumi:2}
// {harry: 1, Soumi: 2}[[Prototype]]: Object
JSON.stringify(l)
// '{"harry":1,"Soumi":2}'
// stringify() returns e string
localStorage.setItem("guys",JSON.stringify(l))
// we can only save item in localstorage as a string
console.log(localStorage.getItem("guys"))
// '{"harry":1,"Soumi":2}'
console.log(JSON.parse(localStorage.getItem("guys")))
// we can parse a item means we can get the actual item like object
// {harry: 1, Soumi: 2}