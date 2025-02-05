console.log('This is promises')
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log('yes i am done');
            resolve("resolved")
        }, 3000);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log('yes i am done 2');
            resolve("resolved 2")
        }, 1000);
    }
})
// let p3=Promise.all([prom1,prom2])
// let p3=Promise.allSettled([prom1,prom2])
let p3=Promise.race([prom1,prom2])
p3.then((a) => {
    console.log(a)
}).catch((err)=>{
    console.log(err)
})
// promise.all():if two promises are resolved then it will give the two values otherwise not
// promise: it passe two argument resolve and reject when you want to resolve it when want to reject .if the code resolved it will go to then method
// resolve-> if the job is finished sucessfully
// reject ->if the job fails
// catch uses to catch the error
//Promise.allSettled()->  resole and settle are different in resolve it will give a value without any error.but in settle it will resolved or rejected one can be implemented.it will give status and value