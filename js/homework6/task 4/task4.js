const inputs = document.querySelectorAll(".arr");
const submit = document.querySelector(".btn");
const out = document.querySelector(".out");

submit.addEventListener("click", () => {
    out.innerHTML = " ";

    inputs.forEach((element) => {
        out.innerHTML += `${element.getAttribute("data-form")}: ${
            element.value
        } </br>`;
    });
});
