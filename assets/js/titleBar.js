// Toggle the header when the titleBar toggle is clicked

// Navigate to titleBar
const titleBar = document.getElementById("titleBar");
const aElement = titleBar.querySelector("a");
// Navigate to body
const bodyElement = document.getElementById("body");
aElement.addEventListener("click", () => {
    bodyElement.classList.toggle("header-visible");
});