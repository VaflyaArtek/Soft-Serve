const list = document.getElementById("list");

const items = list.getElementsByTagName("li");

const result = [
    items[0].textContent,
    items[items.length - 1].textContent,
    items[1].textContent,
    items[3].textContent,
    items[2].textContent,
];

alert(result.join(", "));
