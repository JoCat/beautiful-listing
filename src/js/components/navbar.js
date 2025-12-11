// Navbar toggler
const navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", (event) => {
  navbarToggler.classList.toggle("open");
  const nav = event.currentTarget.nextElementSibling;
  if (nav.className.includes("collapsing")) return;

  if (nav.className.includes("show")) {
    // hide
    nav.style.height = `${nav.scrollHeight}px`;
    nav.scrollHeight; //reflow
    nav.classList.add("collapsing");
    nav.classList.remove("collapse", "show");
    nav.style.height = "";
    setTimeout(() => {
      nav.classList.remove("collapsing");
      nav.classList.add("collapse");
    }, 300);
  } else {
    // show
    nav.classList.remove("collapse");
    nav.classList.add("collapsing");
    nav.style.height = `${nav.scrollHeight}px`;
    setTimeout(() => {
      nav.classList.remove("collapsing");
      nav.classList.add("collapse", "show");
      nav.style.height = "";
    }, 300);
  }
});
