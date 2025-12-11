(() => {
  // src/js/components/breadcrumbs.js
  var breadcrumbsEl = document.querySelector(".breadcrumb");
  var breadcrumbs = location.pathname.split("/").filter((word) => word.length > 0);
  breadcrumbsEl.append(getBreadcrumbsEl("/", "Home", breadcrumbs.length === 0));
  if (breadcrumbs.length > 0) {
    let tree = "/";
    breadcrumbs.forEach((link, index) => {
      tree += link + "/";
      breadcrumbsEl.append(
        getBreadcrumbsEl(tree, link, index === breadcrumbs.length - 1)
      );
    });
  }
  function getBreadcrumbsEl(link, text, last = false) {
    const el = document.createElement("li");
    el.classList.add("breadcrumb-item");
    if (last) {
      el.classList.add("active");
      el.innerText = text;
      return el;
    }
    const a = document.createElement("a");
    a.href = link;
    a.innerText = text;
    el.append(a);
    return el;
  }

  // src/js/components/navbar.js
  var navbarToggler = document.querySelector(".navbar-toggler");
  navbarToggler.addEventListener("click", (event) => {
    navbarToggler.classList.toggle("open");
    const nav = event.currentTarget.nextElementSibling;
    if (nav.className.includes("collapsing")) return;
    if (nav.className.includes("show")) {
      nav.style.height = `${nav.scrollHeight}px`;
      nav.scrollHeight;
      nav.classList.add("collapsing");
      nav.classList.remove("collapse", "show");
      nav.style.height = "";
      setTimeout(() => {
        nav.classList.remove("collapsing");
        nav.classList.add("collapse");
      }, 300);
    } else {
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

  // src/js/components/darkModeToggler.js
  var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
  if (localStorage.getItem("color-theme") === "dark" || !("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    themeToggleLightIcon.classList.remove("hidden");
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
  }
  var themeToggleBtn = document.getElementById("theme-toggle");
  themeToggleBtn.addEventListener("click", function() {
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });

  // src/js/components/toggleContent.js
  document.querySelectorAll(".js__toggle_content").forEach((el) => {
    if (el.dataset.pathname === location.pathname) el.style.display = "block";
  });
})();
