const repeat_str=(num,str)=>{
let  newStr=""
    for(let i=1; i<=num; i++){
        newStr+=str
    }
    return newStr
}

console.log(repeat_str(6,"l"))
console.log(repeat_str(5,"Hello"))