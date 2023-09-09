//task 1
/*
class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }

    getLength() {
        return 2 * Math.PI * this.radius;
    }

    getLengthFromRadius(radius) {
        return 2 * Math.PI * radius;
    }

    getCopy() {
        return new Circle({ x: this.center.x, y: this.center.y }, this.radius);
    }

    static createCircle(x, y, r) {
        return new Circle({ x, y }, r);
    }

    checkPointInside(point) {
        const dx = point.x - this.center.x;
        const dy = point.y - this.center.y;

        return dx * dx + dy * dy <= this.radius * this.radius;
    }

    toString() {
        return `Circle at (${this.center.x}, ${this.center.y}) with radius ${this.radius}`;
    }
}


// task 2
const propsCount = (currentObject) => {
    const keys = Object.keys(currentObject);
    return keys.length;
}


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


// task 4
class Marker {
    #color;
    #ink = 100;
    constructor(color) {
        this.#color = color;
    }

    get color() {
        return this.#color;
    }

    set ink(level) {
        this.#ink = level;
    }

    get inkLevel() {
        return this.#ink;
    }

    print(text) {
        for (const i of text) {
            if (this.#ink >= 10) {
                console.log(i);
            } 
            if(i!==' ') {
                this.#ink -= 10;
            }
        }
    }
}

class RefillableMarker extends Marker {
    refill() {
        this.ink = 100;
    }
}

const blueMarker = new RefillableMarker("blue");
console.log(`Color: ${blueMarker.color}`);
console.log(`Ink Level: ${blueMarker.ink}`);
blueMarker.print("Hello, World!");
blueMarker.refill();


// task 5
class Worker {
    #fullName;
    #dayRate;
    #workingDays;
    #experience;

    constructor(fullName, dayRate, workingDays, experience) {
        this.#fullName = fullName;
        this.#dayRate = dayRate;
        this.#workingDays = workingDays;
        this.#experience = experience;
    }

    getSalary() {
        return this.#dayRate * this.#workingDays;
    }

    getSalaryWithExperience() {
        return this.#dayRate * this.#workingDays * this.#experience;
    }

    get fullName() {
        return this.#fullName;
    }

    set fullName(value) {
        this.#fullName = value;
    }

    get dayRate() {
        return this.#dayRate;
    }

    set dayRate(value) {
        this.#dayRate = value;
    }

    get experience() {
        return this.#experience;
    }

    set experience(value) {
        this.#experience = value;
    }

    get workingDays() {
        return this.#workingDays;
    }

    addWorkingDays(n) {
        this.#workingDays += n;
    }

    static sortBySalary(workers) {
        return workers.slice().sort((a, b) => a.getSalary() - b.getSalary());
    }
}

*/
