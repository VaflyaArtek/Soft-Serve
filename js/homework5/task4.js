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
