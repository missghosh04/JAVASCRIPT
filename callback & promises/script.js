console.log("Soumi is a hacker")
console.log("rohan is a hacker")
// due to javascript asynchronous nature setTimeout function will run after the rest of code execution .some functions in javascript dont follow the order it will run after the code execution
setTimeout(() => {
    console.log("I am inside set timeout 1") 
}, 0);
// delayed in mili seconds
setTimeout(() => {
    console.log("I am inside set timeout 2")  
}, 0);
console.log("The end")
const fn=() => {
  console.log("Nothing")
}

const callback=(arg) => {
  console.log(arg);
  fn();
}

const loadScript=(src,callback) => {
  let sc=document.createElement("script")
  sc.src=src;
  sc.onload=callback("harry");
  document.head.append(sc);
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback )
// a callback function is function which passed into another function as an argument,which is invoked inside the outer function to complete an action
// when ur callback inside callbacks,the code gets difficult to manage it called "callback hell" or "pyramid of doom"
