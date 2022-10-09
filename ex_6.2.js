const countDup=(str)=>{
    let counter={};
for(let i=0;i<str.length;i++){
    counter[i]=0
    for(let j=i;j<str.length;j++){
        if(str[i]==str[j]){
            str[i]: counter[i]=counter[i]+1
        }
    }
}
return counter
}

console.log(countDup("aabbcde"))