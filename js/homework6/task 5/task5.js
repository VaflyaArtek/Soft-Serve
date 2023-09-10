const circles = document.querySelectorAll(".circle");

circles.forEach(element => {
    const dataAnimValue = element.getAttribute("data-anim");
    element.classList.add(dataAnimValue);
});
