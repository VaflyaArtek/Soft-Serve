const button = document.querySelector("button");
const paragraph = document.querySelector("p");

const changeCSS = () => {
    paragraph.style.color = "orange";
    paragraph.style.fontSize = "20px";
    paragraph.style.fontFamily = "Comic Sans MS";
};

button.addEventListener("click", () => {
    changeCSS();
});
