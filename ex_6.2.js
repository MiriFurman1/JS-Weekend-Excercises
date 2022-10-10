const countDup = (str)=> {
    let dupLetters = []; //! The array that we save the duplicate letters
    let dupNum = 0; //! number of duplicate letters
    for (let i = 0; i < str.length; i++) { //!loops over the letters
        let localDup = 0 //!counts the number of duplicates of the current letter
        for (let j = i; j < str.length; j++) {

            if (str[j].toLowerCase() == str[i].toLowerCase()) { //!if the letter appears add +1 to the local counter
                localDup=localDup+1;
                
            }
            if(localDup==2){ //! if the letter appears more than once it is duplicate so we stop iterating
            break;
        }
        }
        if (localDup ==2&&!dupLetters.includes(str[i].toLowerCase())) { 
            dupNum = dupNum+1; //! if the letter is a duplicate add one to the letter duplicate counter
            dupLetters.push(str[i].toLowerCase()) //! and add it to the array of duplicate letters
        }
    

}
return ( dupNum+":"+ dupLetters)
}

console.log(countDup("abcde"))
console.log(countDup("aabBcde"))
console.log(countDup("aabbcde"))
console.log(countDup("indivisibility"))
console.log(countDup("Indivisibilities"))
console.log(countDup("aA11"))
console.log(countDup("ABBA"))
