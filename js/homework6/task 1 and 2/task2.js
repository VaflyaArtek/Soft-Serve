const myTitle = document.querySelector("h1");
myTitle.style.backgroundColor = "#90ee90";

const styles = [
    { fontWeight: "bold" },
    { color: "red" },
    { textDecoration: "underline" },
    { fontFamily: "cursive" },
];

const paragraphs = document.querySelectorAll("#myDiv p");

paragraphs.forEach((paragraph, index) => {
    Object.assign(paragraph.style, styles[index]);
});

const listItem = document.querySelectorAll("#myList li");
listItem.forEach((item) => {
    item.style.display = "inline";
    item.style.listStyleType = "none";
});

const span = document.querySelector("span");
span.style.display = "none";