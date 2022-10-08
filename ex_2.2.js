const arrToBinary =(arr)=>{
    let num=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]==1){
        num+=Math.pow(2,(arr.length-i-1))}
    }
    return num
}

console.log(arrToBinary([1,0,0,1,1]))

//! 2^n represents the binary form, 2^0 gives 1, 2^1 gives 2, 2^2 gives 4 etc... 
//! the order of the powers is opposite to the order of the arr, and the first power we use is 0
//! for example for [0,0,0,1] the length is 4, i at the last index is 3, so we need to substrate 1