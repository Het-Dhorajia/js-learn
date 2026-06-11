let marks = [78, 92, 65, 88, 95, 73, 99, 84, 91, 67, 100, 56, 89, 93, 76];

let newMarks = marks.filter((mark) => {
    return mark>= 90;
})

console.log(newMarks);