// task 5
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
  