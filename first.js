let marks=prompt("Enter marks");
console.log(marks);

if(marks>=80 && marks<=100){
    console.log("Grade A");
}

else if(marks>=70 && marks<=89){
    console.log("Grade B");
}

else if(marks>=60 && marks<=69){
    console.log("Grade C");
}

else if(marks>=50 && marks<=59){
    console.log("Grade D");
}

else{
    console.log("Grade F");
}