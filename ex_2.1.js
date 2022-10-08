const sumOfLowest=(arr)=>{
    let lowest1=arr[0];
    let lowest2=0;

    for (let i=1; i<arr.length; i++){
        if (arr[i]<lowest1) {
            lowest2=lowest1
            lowest1=arr[i]
        }
//! if the current number lower than the second lowest, but higher than the lowest, or if we didn't change the lowest2 
        if((arr[i]<lowest2&& arr[i]>lowest1)||lowest2==0){ 
            lowest2=arr[i]
        }

    }


    return (lowest1+lowest2)
}

console.log(sumOfLowest([2,6,5,8,3,1]))