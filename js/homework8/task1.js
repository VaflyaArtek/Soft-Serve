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