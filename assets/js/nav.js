const navElement = document.getElementById("nav");
const ulElement = navElement.querySelector("ul");
const liElements = ulElement.querySelectorAll("li");

let manualNavigation = false;

liElements.forEach(li => {
  li.addEventListener("click", () => {
    liElements.forEach(item => item.querySelector("a").classList.remove("active"));
    li.querySelector("a").classList.add("active");
    manualNavigation = true;

    setTimeout(() => {
      manualNavigation = false;
    }, 3000); 
  });
});

const sections = ['#about', '#projects', '#research', '#contact'];
let sectionOffsets = {};

function updateOffsets() {
  sectionOffsets = {};
  sections.forEach(section => {
    sectionOffsets[section] = document.querySelector(section).offsetTop;
  });
}

updateOffsets();

window.addEventListener('resize', updateOffsets);

let lastSection = null;

function activateCurrentSection() {
  if (manualNavigation) return;

  let scrollPositionTop = window.scrollY;
  let scrollPositionMiddle = scrollPositionTop + window.innerHeight / 2;
  let scrollPositionBottom = scrollPositionTop + window.innerHeight;

  let currentSection = null;

  if (scrollPositionTop <= sectionOffsets['#about']) {
    currentSection = '#about';
  } else if (scrollPositionBottom >= document.body.scrollHeight) {
    currentSection = '#contact';
  } else {
    for (let section of sections) {
      if (scrollPositionMiddle >= sectionOffsets[section]) {
        currentSection = section;
      } else {
        break;
      }
    }
  }

  if (currentSection !== lastSection) {
    lastSection = currentSection;
    
    liElements.forEach(item => item.querySelector("a").classList.remove("active"));
    const activeLink = ulElement.querySelector(`a[href='/#${currentSection.substring(1)}']`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }
}
window.addEventListener('load', activateCurrentSection)
window.addEventListener('scroll', activateCurrentSection);
