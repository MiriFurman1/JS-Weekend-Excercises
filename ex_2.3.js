const findNextSquare=(num)=>{
if(!Number.isInteger(Math.sqrt(num))){
    return -1
}
else{
    let root=(Math.sqrt(num)+1)
    return Math.pow(root,2)
}

}

console.log(findNextSquare(143))
console.log(findNextSquare(121))
console.log(findNextSquare(625))