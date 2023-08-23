// task 3
const randArray = (k) => {
    const arr = []

    for (let i=1; i<=k; i++) {
        const randomNum = Math.floor(Math.random() * 500 + 1);
        arr.push(randomNum);
    }
    return arr;
}

console.log(randArray(10));
