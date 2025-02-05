function getdata(dataid,getnextdata){
    setTimeout(() => {
        console.log("data",dataid);
        if(getnextdata){
            getnextdata();
        }
        
    }, 2000);
}
getdata(1,() => { 
    getdata(2,()=>{
        getdata(3);
    })
})
let promise=new Promise((resolve, reject) => {
    console.log("i am a promise");
    // resolve("sucess");
    reject("some error occured");
})