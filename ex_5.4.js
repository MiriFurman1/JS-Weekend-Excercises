const toWeirdCase=(str)=>{
    let wordArr=str.split(" ") //!make array of words (in order to consider spaces)
    for(let i=0; i<wordArr.length;i++){ //!loop over the words
    let word= wordArr[i] //!save each word to a new variable
    let letterArr=word.split("") //! split the current word to letters
        for(let j=0;j<wordArr[i].length;j++){ //!loop over the letters
            if(j%2==0){ //!if the index is even
            letterArr[j]=wordArr[i][j].toUpperCase() //!uppercase and save it to the letters array
            }
        }
        wordArr[i]=letterArr.join("") //! save the finished word to the word array
    }
    return wordArr.join(" ") //! join the word array to a string with spaces
}
console.log(toWeirdCase("string"))
console.log(toWeirdCase("weird string case"))
