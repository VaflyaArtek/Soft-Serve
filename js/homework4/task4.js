// task 4
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
