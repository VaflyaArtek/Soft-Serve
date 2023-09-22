// task 3
const regex = /(\S+)\s+(\S+)/;

let str = "Java Script";
let newStr = str.replace(regex, "$2 $1");
console.log(newStr);
