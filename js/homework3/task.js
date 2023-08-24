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
    let numberArray = [];
    let otherArray = [];
  
    function processArray(arr) {
        for (let item of arr) {
            if (Array.isArray(item)) {
                processArray(item);
            } else if (typeof item === 'number') {
                numberArray.push(item);
            } else {
                otherArray.push(item);
            }
        }
    }
  
    processArray(inputArray);
  
    return [numberArray, otherArray];
  }
  
  let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
  let arrNew = separateArraysByType(arr);
  
  console.log(arrNew);

*/