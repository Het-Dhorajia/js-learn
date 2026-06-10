marks = [85 , 97 , 44 , 37  , 76 ,  60 ]
let sum = 0 ;

console.log(marks) ; 

for (i = 0 ; i < Array.length ; i++){
    sum+= marks[i] 
}

    avg = sum / Array.length
    console.log("avg = " , avg)
