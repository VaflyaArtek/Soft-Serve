const btn = document.querySelector("button");
const text = document.querySelector(".text");

btn.addEventListener("click", () => {
    text.innerHTML += "<p>I was pressed</p>";
});

btn.addEventListener("mouseenter", () => {
    text.innerHTML += "<p>Mouse on me!</p>";
});

btn.addEventListener("mouseleave", () => {
    text.innerHTML += "<p>Mouse is not on me!</p";
});
