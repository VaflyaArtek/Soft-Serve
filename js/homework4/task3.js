// task 3
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
