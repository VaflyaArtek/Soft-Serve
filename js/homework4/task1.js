// task 1
const sumSliceArray = (arr, first, second) => {
    first = parseInt(first);
    second = parseInt(second);

    if (isNaN(first) || isNaN(second)) {
        throw new Error("Please, enter number");
    }
    if (first > arr.length || second > arr.length) {
        throw new Error("Please, enter correct number");
    }

    const sum = arr[first - 1] + arr[second - 1];
    return sum;
};

const arr = [6, 1, 5, 2, 4, 3];

try {
    const firstElem = prompt("Enter first element");
    const secondElem = prompt("Enter second element");

    console.log(sumSliceArray(arr, firstElem, secondElem));
} catch (error) {
    console.log(error.message);
}
