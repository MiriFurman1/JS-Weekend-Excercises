const accum =(str)=>{
    
    let newStr=""
    for(let i=0; i<str.length; i++){
        newStr+=str[i].toUpperCase()
        for(let j=0;j<i;j++){
            newStr+=str[i].toLowerCase()
        }
        if(i!=str.length-1){ //! put a - only if it is not at the end
            newStr+="-"
        }
        
    }
    return newStr
}

console.log(accum("abcd"))
console.log(accum("RqaEzty"))
console.log(accum("cwAt"))

