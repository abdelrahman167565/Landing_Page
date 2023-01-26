/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");
let lastActiveSec = null;
const activeSec = "active";

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
const buildnav = (sections, navList) => {
  sections.forEach((element) => {
    let newlist = document.createElement("li");
    newlist.innerHTML = `<a class="menu__link"  data-nav='${element.id}' href="#${element.id}"> ${element.dataset.nav} </a>`;
    navList.append(newlist);
  });

  //adding an event listener on click calling function setActiveSecNav--- to set the active section on navigation bar
  navList.addEventListener("click", setActiveSecNav);
};

//another Event listener on click to scroll *SMOOTHLY* TO THE REQUIRED SECTION
navList.addEventListener("click", (ele) => {
  ele.preventDefault();
  console.log(ele.target.dataset.nav);
  if (ele.target.dataset.nav) {
    console.log("ele.target.dataset.nav");
    document
      .getElementById(`${ele.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
  }
});

//THE FUNCTION CALLED IN BUILDNAV() TO ADD/REMOVE ACTIVE FROM SECTIONS AND THUS HIGHLITING THEM
const setActiveSecNav = (elm) => {
  elm.target.classList.add(activeSec);
  if (lastActiveSec !== null) {
    lastActiveSec.classList.remove(activeSec);
  }
  lastActiveSec = elm.target;
};

// EVENT LISTNENR ON SCROLL TO SET THE SECTION IN VIEW AS ACTIVE & MAKE THE SCROLLUP BUTTON APPEAR TO DISAPPEAR
window.addEventListener("scroll", (scrollevent) => {
  if (document.body.scrollTop > 250) {
    document.getElementById("scrollUpButton").style.display = "block";
  } else {
    document.getElementById("scrollUpButton").style.display = "none";
  }
  sections.forEach((element) => {
    const top = element.getBoundingClientRect().top;
    if (top >= -100 && top <= 200) {
      element.classList.add("your-active-class");
    } else {
      element.classList.remove("your-active-class");
    }
  });
});



// function called to Build menu (The start)
buildnav(sections, navList);
