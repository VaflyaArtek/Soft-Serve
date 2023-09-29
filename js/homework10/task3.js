// task 3
function mul(...args) {
    let result = 1;
    let foundNumber = false;

    for (const arg of args) {
        if (typeof arg === 'number') {
            result *= arg;
            foundNumber = true;
        }
    }

    return foundNumber ? result : 0;
}