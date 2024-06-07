
const navElement = document.getElementById("nav");
const ulElement = navElement.querySelector("ul");
const liElements = ulElement.querySelectorAll("li");

liElements.forEach(li => {
  li.addEventListener("click", () => {
    liElements.forEach(item => item.querySelector("a").classList.remove("active"));
        li.querySelector("a").classList.add("active");
  });
});