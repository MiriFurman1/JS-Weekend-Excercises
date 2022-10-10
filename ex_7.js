//? Filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];



const myFilter=(arr,func)=>{
    let newArr=[]
    for(let i=0; i<arr.length;i++){
        if(func(arr[i])) //!the function will return boolean, if the condition is true the word is pushed to the returned array
        newArr.push(arr[i])
    }
    return newArr

}
console.log(myFilter(words,word => word.length > 6))


//? forEach
const array1 = ['a', 'b', 'c'];

const myForEach=(arr,func)=>{

for(let i=0; i<arr.length; i++){
    func(arr[i])
}
}

myForEach(array1,x=>console.log(x))


//? map

const array2 = [1, 4, 9, 16];

const myMap=(arr,func)=>{
    let newArr=[]
    for(let i=0; i<arr.length;i++){
        
    newArr.push(func(arr[i]))
    
}
return newArr
}

console.log(myMap(array2,x=>x*2))
