//task 7
const findUnique = (arr) => {
    const newArr = [];

    for (const i of arr) {
        if (newArr.includes(i)) {
            return false;
        } else {
            newArr.push(i);
        }
    }

    return true;
}

console.log(findUnique([2, 3, 4, 2])); // false
console.log(findUnique([1, 2, 3, 5, 11])); // true
