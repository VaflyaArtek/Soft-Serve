/*
// task 1
const upperCase = (str) => {
    const regex = /^[A-Z]/;

    if (regex.test(str)) {
        return "String's starts with uppercase character";
    } else {
        return "String's not starts with uppercase character";
    }
};

console.log(upperCase('regexp'));
console.log(upperCase('RegExp'));
console.log(upperCase('regExp')); 


// task 2
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}


// task 3
const regex = /(\S+)\s+(\S+)/;

let str = "Java Script";
let newStr = str.replace(regex, "$2 $1");
console.log(newStr);


// task 4
const regex = /^[1-9]\d{3}-\d{4}-\d{4}-\d{4}$/;


//task 5
*/