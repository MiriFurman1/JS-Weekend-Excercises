//! [number of people that come in, number of people that get out]
//! each array is representing a bus stop

const numOnTheBus =(arr)=>{
    let currentNum=0
    let flag=false
arr.forEach(element => {
    currentNum=currentNum+element[0]-element[1]
    if(currentNum<0) flag=true
    //! the flag checks if there is a negative number while iterating and not just at the end
});
if (flag) return "error, number of people on the bus can't be negative"
else return currentNum

}




arr1=[[2,0],[5,1],[3,2]]
arr2=[[0,0],[1,0],[0,3]] 
arr3=[[0,0],[1,5],[9,3]]
console.log(numOnTheBus(arr1))
console.log(numOnTheBus(arr2))
console.log(numOnTheBus(arr3))