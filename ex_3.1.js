const nb_year=(p0, percent, aug, p)=>{
    let current=p0
    let years=0
while (current<p){
    current=current+(current*percent/100)+aug
    years++
}
return years
}
//! p0 the population at the beginning 
//! percent is the percentage of growth
//! aug is the number of outside people joining or leaving
//! p is desired population
//! years is the number of years to get to the desired population

console.log(nb_year(1500,5,100,5000))
console.log(nb_year(1500000,2.5,10000,2000000))