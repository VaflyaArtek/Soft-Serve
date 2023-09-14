const price = document.querySelector("#outprice");
const colorBtn = document.querySelectorAll(".color");
const shoes = document.querySelectorAll(".shoe");
const bgs = document.querySelectorAll(".gradient");

const promoCodeInput = document.querySelector(".discount__input");
const discountConfirm = document.querySelector(".discount__confirm");
const quantityInput = document.querySelector(".quantity-input");

let currentPrice = parseFloat(price.textContent);
let originalPrices = {};
let originalPrice = currentPrice;
let currentQuantity = 1; // Додали currentQuantity

// Color
const changeCard = (event) => {
    colorBtn.forEach((btn) => {
        btn.classList.remove("active");
    });
    event.target.classList.add("active");
    shoes.forEach((shoe) => {
        shoe.classList.remove("show");
        if (shoe.attributes.color.value === event.target.attributes.color.value) {
            shoe.classList.add("show");
        }
    });
    bgs.forEach((bg) => {
        bg.classList.remove("second");
        if (bg.attributes.color.value === event.target.attributes.color.value) {
            bg.classList.add("second");
        }
    });

    const selectedColor = event.target.attributes.color.value;
    currentPrice = originalPrices[selectedColor] || 0;
    price.textContent = (currentPrice * currentQuantity).toFixed(2); // Множимо на кількість
};

colorBtn.forEach((btn) => {
    btn.addEventListener("click", changeCard);
});

// Promo code
const validPromoCode = "DISCOUNT2023";

const applyDiscount = () => {
    currentPrice = currentPrice - (currentPrice * 10) / 100;
    price.textContent = (currentPrice * currentQuantity).toFixed(2); // Множимо на кількість

    discountConfirm.classList.remove("none");
    setTimeout(function () {
        discountConfirm.classList.add("none");
    }, 1000);
};

promoCodeInput.addEventListener("input", function () {
    const enteredPromoCode = promoCodeInput.value;

    if (enteredPromoCode === validPromoCode) {
        applyDiscount();
    } else {
        const selectedColor = document.querySelector(".color.active").getAttribute("color");
        currentPrice = originalPrices[selectedColor] || 0;
        price.textContent = (currentPrice * currentQuantity).toFixed(2); // Множимо на кількість
    }
});

// Initialize original prices
colorBtn.forEach((btn) => {
    const color = btn.getAttribute("color");
    originalPrices[color] = parseFloat(btn.getAttribute("data-price"));
});



// Quantity
quantityInput.addEventListener("input", () => {
    const quantity = parseInt(quantityInput.value);
    
    if (!isNaN(quantity) && quantity >= 1 && quantity <= 99) {
        currentQuantity = quantity; // Зберігаємо кількість
        price.textContent = (originalPrice * currentQuantity).toFixed(2); // Перераховуємо ціну
    }
});