const toCamelCase=(str)=>{
    let newStr=str.split("")
    for(let i=0;i<newStr.length;i++){
        if(newStr[i]=="-"||newStr[i]=="_"){
            newStr[i+1]=newStr[i+1].toUpperCase()
            newStr[i]=newStr[i].replace("-","").replace("_","")
        }
        
    }
    return newStr.join("")
}

console.log(toCamelCase("My-name-is-garfield"))
console.log(toCamelCase("the-stealth-warrior"))
console.log(toCamelCase("The_Stealth_warrior"))