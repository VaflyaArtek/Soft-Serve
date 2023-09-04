/*
// -------------------task 1
const sumSliceArray = (arr, first, second) => {
    first = parseInt(first);
    second = parseInt(second);

    if (isNaN(first) || isNaN(second)) {
        throw new Error("Please, enter number");
    }
    if (first > arr.length || second > arr.length) {
        throw new Error("Please, enter correct number");
    }

    const sum = arr[first - 1] + arr[second - 1];
    return sum;
};

const arr = [6, 1, 5, 2, 4, 3];

try {
    const firstElem = prompt("Enter first element");
    const secondElem = prompt("Enter second element");

    console.log(sumSliceArray(arr, firstElem, secondElem));
} catch (error) {
    console.log(error.message);
}


// -------------------task 2
const checkAge = () => {
    try {
        const name = prompt("Enter your name");
        const ageInput = prompt("Enter your age");
        const status = prompt("Enter your status");

        if (!ageInput || !name || !status) {
            throw new Error("The field is empty! Please enter your age");
        }

        const age = parseInt(ageInput);

        if (isNaN(age)) {
            throw new EvalError("Age must be a numeric value.");
        }

        if (age > 70 || age < 18) {
            throw new RangeError("Age must be between 18 and 70.");
        }

        if (
            !(status === "owner" || status === "moderator" || status === "user")
        ) {
            throw new EvalError(
                "Invalid status. Please enter owner, moderator, or user."
            );
        }
    } catch (error) {
        alert(`Error: ${error.name} - ${error.message}`);
    }
};

checkAge();


// -------------------task 3
const calcRectangleArea = (width, height) => {
    if (height <= 0 || width <= 0) {
        throw new Error("Pls type correct value!");
    }
    if (isNaN(height) || isNaN(width)) {
        throw new Error("Pls type number value!");
    }
    const s = width * height;
    return s;
};

try {
    const width = +prompt("Enter width");
    const height = +prompt("Enter height");
    console.log(calcRectangleArea(width, height));
} catch (error) {
    console.log(error.message);
}


// -------------------task 4
class MonthException {
    constructor(message) {
        this.message = message;
        this.name = "MonthException";
    }
}

const showMonthName = (month) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    if (months[month - 1] !== undefined) {
        return months[month - 1];
    } else {
        throw new MonthException("Incorrect month number");
    }
};

try {
    const myMonth = +prompt("enter month number");
    const MonthName = showMonthName(+myMonth);
    console.log(MonthName);
} catch (error) {
    console.error(error.message, error.name);
}


// -------------------task 5
const showUserId = (id) => {
    const object = {
        id: id,
    };

    if (id < 0) {
        throw new Error("Your id is negative");
    }

    return object;
};

const showUsers = (ids) => {
    const array = [];

    for (const id of ids) {
        try {
            const user = showUserId(id);
            array.push(user);
        } catch (error) {
            console.error(error.message);
        }
    }

    return array;
};

const ids = [1, 2, -3, 4, -5];
const users = showUsers(ids);
console.log(users);

*/
