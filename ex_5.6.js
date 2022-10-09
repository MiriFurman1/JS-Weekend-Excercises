const maskify=(str)=>{
    let newStr=str.split("")
for(let i=0; i<str.length-4;i++){
    newStr[i]="#"
}
return(newStr.join(""))
}

console.log(maskify("4556364607935616"))
console.log(maskify("64607935616"))
console.log(maskify("1"))
console.log(maskify(""))
console.log(maskify("Skippy"))
console.log(maskify("Nananananananananananananananana Batman!"))