const longest=(s1,s2)=>{
let letterStr="abcdefghijklmnopqrstuvwxyz"
let newStr=[]
s1=s1.toLowerCase()
s2=s2.toLowerCase()
for(let i=0;i<letterStr.length;i++){
    if(s1.includes(letterStr[i])||s2.includes(letterStr[i])){
        newStr.push(letterStr[i])
    }
}
return (newStr.join(""))
}

console.log(longest("Milky","garfield"))
console.log(longest("xyaabbbccccdefww","xxxxyyyyabklmopq"))
console.log(longest("abcdefghijklmnopqrstuvwxyz","abcdefghijklmnopqrstuvwxyz"))