const findUnique=(arr)=>{
    let unique=arr[0]
    for(let i=1; i<arr.length-1;i++){ //! because we check 3 numbers at the same time i starts with 1 and ends at length-1
       
        if(arr[i]!=arr[i-1]&& arr[i]!=arr[i+1]){
            unique=arr[i]
            }

        if (arr[i]==arr[i-1]&& arr[i]!=arr[i+1]){ //! if the unique number is at the end
            unique=arr[i+1]
        }

        if(arr[i]!=arr[i-1]&& arr[i]==arr[i+1]){ //!if the unique number is at the beginning
            unique=arr[i-1]
        }

    }
    return unique

}

console.log(findUnique([0,0,0,1]))