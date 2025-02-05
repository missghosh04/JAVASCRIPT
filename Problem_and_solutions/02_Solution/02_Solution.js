// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
let arr = [2, 3, 4, 5, 6, 2, 1, 2, 1]
let arr2 = []
let l=0
function doublenumber() {
    for (let i = 0; i < arr.length; i++) {
       
        for (let j = i+1; j < arr.length-1; j++) {
         
            if(arr[i]!=arr[j]){
                arr[i]=arr[i]*2
            }
           

        }

    }
    console.log(arr);

}
doublenumber()

