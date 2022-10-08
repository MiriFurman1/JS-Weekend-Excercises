const centuryFromYear=(year)=>{
    year=year.toString()
let yearArr=year.split('')
let century=0
if(yearArr.length==4&& year%100!=0){  //! the last year will be addressed later
    century=(parseInt([yearArr[0],yearArr[1]].join(""))+1)
    
}
if(yearArr.length==4&& year%100==0){  //! if it is a round year like 1900, it will be the last year of the 19 century
    century=(parseInt([yearArr[0],yearArr[1]].join("")))
    
}

if(yearArr.length==3&&year%100!=0){  //!! similarly for years with3 digits
    century=parseInt(yearArr[0])+1
    
}
if(yearArr.length==3&&year%100==0){
    century=parseInt(yearArr[0])
    
}
return century

}
console.log(centuryFromYear(1705))
console.log(centuryFromYear(1900))
console.log(centuryFromYear(1601))
console.log(centuryFromYear(2000))
console.log(centuryFromYear(500))
console.log(centuryFromYear(501))

