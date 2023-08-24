/*
// -------------------task 1

const createArray = (start, end) => {
    const result = [];

    if (start > end) {
        for (let i = start; i>=end; i--) {
            result.push(i)
        }
    } else {
        for (let i = start; i<=end; i++) {
            result.push(i)
        }
    }
    return result
}


console.log(createArray(7,3));
console.log(createArray(3,7));


// -------------------task 2

const progression = (a,b) => {
    const result = [];

    for (let num=a;num<=b;num++) {
        for(let i=0;i<num-a+1;i++) {
            result.push(num);
        }
    }
    return result
}


console.log(progression(2,5));

// -------------------task 3

const randArrat = k => {
    const result = [];

    for (let i = 1; i<=k; i++) {
        const randValue = Math.floor(Math.random()*500+1)
        result.push(randValue);
    }

    return result
}

console.log(randArrat(5));



// -------------------task 4

const compact = (arr) => {
    const result = [];

    for (const i of arr) {
        if (!result.includes(i)) {
            result.push(i)
        }
    }

    return result
}


const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2) ; 


// -------------------task 5

function separateArraysByType(inputArray) {
    const numberArray = [];
    const otherArray = [];

    function processArray (arr) {
        for (const item of arr) {
            if (Array.isArray(item)) {
                processArray(item)
            } else if (typeof item === 'number') {
                numberArray.push(item)
            } else {
                otherArray.push(item)
            }
        }
    }

    processArray(inputArray);

    return [numberArray, otherArray];

}
  
let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
let arrNew = separateArraysByType(arr);
  
console.log(arrNew);

// -------------------task 6
const calc = (a, b, op) => {
    let result = null
    
    if (op===1) {
        result = a-b;
    } else if (op===2) {
        result = a*b;
    } else if (op===3) {
        result = a/b;
    } else {
        result = a+b
    }

    return result
}

console.log(typeof(calc(3,0,3)));

// -------------------task 7
const findUnique = (arr) => {
    const newArr = [];
    
    for (const i of arr) {
        if (newArr.includes(i)) {
            return false
        } else {
            newArr.push(i);
        }
    }

    return true
}

console.log(findUnique([1, 2, 3, 5, 3]));  // => false
console.log(findUnique([1, 2, 3, 5, 11])); // => true
*/