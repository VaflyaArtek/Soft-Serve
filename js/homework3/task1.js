// task 1 

const createArray = (start, end) => {
    const result = [];
    
    if (start > end) {
        for (let i = start; i >= end; i--) {
            result.push(i);
        } 
    } else {
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
    }
    return result; 
};

console.log(createArray(2, 7)); // [2, 3, 4, 5, 6, 7]
console.log(createArray(7, 2)); // [7, 6, 5, 4, 3, 2]