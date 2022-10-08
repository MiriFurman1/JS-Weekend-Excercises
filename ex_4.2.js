const tribonacci=(n)=>{
    let n1=0, n2=0, n3=1 ,next; 
    let fibArr=[]
    for(let i=0; i<n; i++){
    fibArr.push(n1)
    next=n1+n2+n3 //!similar to fibonacci but with 3 elements
    n1=n2; //!n1 is now the old n2
    n2=n3; //!new n2 is the old n3
    n3=next  //! new n3 is the new number
    }
    return fibArr
    }
    
    
    console.log(tribonacci(20))