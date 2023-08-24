// task 5
const separateArrayByType = inputArray => {
    const numberArray = [];
    const otherArray = [];

    const processArray = arr => {
        for (const i of arr) {
            if (Array.isArray(i)) {
                processArray(i);
            } else if (typeof i === 'number') {
                numberArray.push(i);
            } else {
                otherArray.push(i);
            }
        }
    }
    processArray(inputArray);
    return [numberArray, otherArray];
}

let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
let arr2 = separateArrayByType(arr);
console.log(arr2);

