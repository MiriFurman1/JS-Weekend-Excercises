const shortestWord=(str)=>{
    let strArr=str.split(" ") //! need to use array to split the words, because we want to iterate over the words and not the letters
    let shortest=strArr[0].length
for(let i=1; i<strArr.length;i++){
if(strArr[i].length<shortest){
shortest=strArr[i].length
}
}
return shortest

}

console.log(shortestWord("hello myyyy name issss milky"))