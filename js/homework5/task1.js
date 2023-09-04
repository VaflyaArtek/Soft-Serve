class Product {
    constructor(price, name, quanity) {
        this.price = price;
        this.name = name;
        this.raiting = null;
        this.quanity = quanity;
        this.inStock = quanity > 0 ? true : false;
    }

    show() {
        console.log(
            `price: ${this.price}$, name: ${this.name}, quaity: ${this.quanity}, instock: ${this.inStock}`
        );
    }
    applyDiscount(value) {
        this.price -= (this.price / 100) * value;
    }
    getTotalPrice() {
        return this.price * this.quanity;
    }
    setNewPrice(value) {
        if (value >= 0) this.price = value;
    }
}

const prod1 = new Product(200, "rx5699", 5);
prod1.setNewPrice(100);
prod1.applyDiscount(0);
prod1.show();
console.log(prod1.getTotalPrice());

const prod2 = new Product(399, "rx570", 10);
prod2.applyDiscount(15);
prod2.show();

const prod3 = new Product(1000, "rtx 4080", 0);
prod3.applyDiscount(10);
prod3.show();

class Monitor extends Product {
    constructor(name, price, quanity, matrix, resolution, diagonal) {
        super(name, price, quanity);

        this.matrix = matrix;
        this.resolution = resolution;
        this.diagonal = diagonal;
    }
}
