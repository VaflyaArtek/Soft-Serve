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
