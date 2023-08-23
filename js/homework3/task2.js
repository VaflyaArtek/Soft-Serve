// task 2
const generateRepeatedNumbers = (a, b) => {
    let result = [];

    for (let num = a; num <= b; num++) {
        for (let i = 0; i < num - a + 1; i++) {
            result.push(num);
        }
    }

    return result;
}

console.log(generateRepeatedNumbers(2, 5));