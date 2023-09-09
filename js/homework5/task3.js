// task 3
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `${this.surname} ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    getFullName(middleName) {
        if (middleName) {
            return `${this.surname} ${this.name} ${middleName}`;
        } else {
            return super.getFullName();
        }
    }

    getCourse() {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this.year + 1;
        return Math.min(Math.max(course, 1), 6);
    }
}