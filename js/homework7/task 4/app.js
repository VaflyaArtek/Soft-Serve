const select = document.querySelector(".select");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const selectedOption = select.options[select.selectedIndex];
    if (selectedOption) {
        const optionText = selectedOption.text;
        select.removeChild(selectedOption);
    }
});
