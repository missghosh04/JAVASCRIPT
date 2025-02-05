let a=prompt("enter your first number")
let b=prompt("enter your second number")
if(isNaN(a)||isNaN(b)){
 throw SyntaxError("Sorry this is not allowed")
}
// nan appears when you give different type of input
let sum=parseInt(a)+parseInt(b)
// let x= 5;
// try {
//     console.log("your sum is",sum*x)
// } catch (error) {
//     console.log('error aa gaya vaiiiii');
    
// }
// finally{
//     console.log("files are being closed and db connections is being closed")
// }
            //  
// finally:if try or catch block not run .finally will definently run.
// why we use finally we can just add a line after that it will run usually
// ans->when we are in function we have to return true or false rest of the code will not run.so in that's case we finally to run the rest of the code always.here is an example....
function main(){
    let x= 5;
    try {
        console.log("your sum is",sum*x);
        return true;
    } catch (error) {
        console.log('error aa gaya vaiiiii');
        return false;
        
    }
    
    finally{
        console.log("files are being closed and db connections is being closed")
    }  
}
main()