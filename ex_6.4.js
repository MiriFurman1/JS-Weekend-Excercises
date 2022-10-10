const isogram = (str)=> {
    

    for (let i = 0; i < str.length; i++) { 
        let localDup = 0 
        for (let j = i; j < str.length; j++) {

            if (str[j].toLowerCase() == str[i].toLowerCase()) { 
                localDup=localDup+1;
                
            }
            if(localDup==2){ 
            return false
        }
        
        }
}

return true
}

console.log(isogram("Dermatoglyphics"))
console.log(isogram("aba"))
console.log(isogram("moOse"))