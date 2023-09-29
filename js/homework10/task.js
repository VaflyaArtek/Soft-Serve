/*
// task 1
let {
    first: f = "Name №1",
    second: s = "Name №2",
    third: t = "Name №3",
} = names;



// task 2
let {
    names: [name1, name2, name3],
    ages: [age1, age2, age3],
} = data;



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


// task 4
let server = {
    data: 0,
    convertToString: function (callback) {
        callback(() => {
            return this.data + "";
        });
    },
};

let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function () {
        return (callback) => {
            this.result = callback();
        };
    },
};


// task 5
var arr = [];

for (var i = 0; i <= 2; i++) {
  arr[i] = (function (index) {
    return function () {
      console.log(index);
    };
  })(i);
}


// task 6
function mapBuilder(keysArray, valuesArray) {
    if (keysArray.length !== valuesArray.length) {
        throw new Error("Масиви мають бути однакової довжини.");
    }

    const map = new Map();

    for (let i = 0; i < keysArray.length; i++) {
        map.set(keysArray[i], valuesArray[i]);
    }

    return map;
}

*/