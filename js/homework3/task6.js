// task 6
const calc = (a,b,op) => {
    if (op===1) {
        return a-b;
    } else if (op===2) {
        return a*b
    } else if (op===3) {
        if ((b!==0)) {
            return a/b
        } else {
            return 'ivanid b'
        }
    } else {
        return a+b;
    }
}

console.log(calc (10, 2, 3));