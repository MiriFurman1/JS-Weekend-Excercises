const nameToInitials=(str)=>{
const name=str.split(" ")
const first=name[0]
const last=name[1]

return (first[0]+"."+last[0]).toUpperCase()
}

console.log(nameToInitials("Sam Harris"))
console.log(nameToInitials("Patrick Feenly"))