let numbers = [12, 45, 8, 67, 23, 89, 34, 56, 91, 15];

numbers.forEach((value, index) => {
    numbers[index] = value ** 2;
});

console.log(numbers);