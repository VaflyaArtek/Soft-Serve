function displayWindowSize() {
    const windowSize = document.getElementById("windowSize");
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    windowSize.textContent = `${windowWidth}px x ${windowHeight}px`;
}

displayWindowSize();

window.addEventListener("resize", displayWindowSize);