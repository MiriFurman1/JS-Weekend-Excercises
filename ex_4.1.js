const fibonacci=(n)=>{
let n1=0, n2=1,next; //!next is for saving the sum
let fibArr=[]
for(let i=0; i<n; i++){
fibArr.push(n1)
next=n1+n2 //!the next number is the sum of the two before
n1=n2; //! make n1 move by one number
n2=next //! make n2 the next, meaning the new number we just made (make n2 move by number to the new number)
}
return fibArr
}


console.log(fibonacci(20))