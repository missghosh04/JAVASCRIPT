// async function getdata() {
//     // simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(6777)
//         }, 3000);
//     })
// }
// if we put async into this function it will pending rest of the code will be executed. this function will be running into background we dont care about this function
// async function getdata() {
//     let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // let data=await x.json()
//     // when we do json it will data as a javascript object
//       let data= await x.text()
//     console.log(data) 
//     return 233
// } 
// selttle means resolve or reject
// resolve means promises has settled successfully
// reject means promise has not settled sucessfully
// fetch api return a promises
async function postdata() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json() 
    return data
}
async function main() {
    console.log("Loading Modules")
    console.log("Do something else")
    console.log("load data")
    let data = await postdata()
    console.log(data)
    console.log("process data")
    console.log("task 2")
}
// await will wait for the function completion after completing the function rest of the code will be executed
main();
// data.then((v) => {
//     console.log(data)
//     console.log("process data")
//     console.log("task 2")
// }
// )
// using this call back function after getdata executed then rest portion will be executed.
