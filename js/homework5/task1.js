//task 1
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
