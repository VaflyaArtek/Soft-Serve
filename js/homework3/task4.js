// task 4
const compact = (arr) => {
    const newArr = []

    for (const i of arr) {
        if (!newArr.includes(i)) {
            newArr.push(i)
        }
    }
    return newArr
}

const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2) ; // [5,3,4,6,7]