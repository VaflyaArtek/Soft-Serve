const blue = document.querySelector(".blue");
const pink = document.querySelector(".pink");
const brownWhite = document.querySelector(".brown-white");
const link = document.querySelector("a");
const html = document.querySelector("html");

blue.addEventListener("click", () => {
    html.style.backgroundColor = "blue";
});

pink.addEventListener("dblclick", () => {
    html.style.backgroundColor = "pink";
});

brownWhite.addEventListener("mousedown", () => {
    html.style.backgroundColor = "brown";
});

brownWhite.addEventListener("mouseup", () => {
    html.style.backgroundColor = "White";
});

link.addEventListener("mouseenter", () => {
    html.style.backgroundColor = "yellow";
});

link.addEventListener('mouseleave', () => {
    html.style.backgroundColor = 'white'
})
