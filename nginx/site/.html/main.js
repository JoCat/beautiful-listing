// By JCat
// Contacts: https://jocat.ru/

"use strict";

// Navbar toggler
const navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", (event) => {
  const nav = event.currentTarget.nextElementSibling;
  if (nav.className.includes("collapsing")) return;

  if (nav.className.includes("show")) {
    // hide
    nav.style.height = `${nav.scrollHeight}px`;
    nav.scrollHeight; //reflow // Подсмотрел в коде бутстрапа)
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

// Breadcrumbs
const breadcrumbs_el = document.querySelector(".breadcrumb");
const breadcrumbs = location.pathname
  .split("/")
  .filter((word) => word.length > 0);

breadcrumbs_el.append(get_breadcrumbs_el("/", "Home", breadcrumbs.length == 0));
if (breadcrumbs.length > 0) {
  let tree = "/";
  breadcrumbs.forEach((link, index) => {
    tree += link + "/";
    breadcrumbs_el.append(
      get_breadcrumbs_el(tree, link, index == breadcrumbs.length - 1)
    );
  });
}

function get_breadcrumbs_el(link, text, last = false) {
  const el = document.createElement("li");
  el.classList.add("breadcrumb-item");
  if (last === true) {
    el.classList.add("active");
    el.innerHTML = text;
    return el;
  }
  const a = document.createElement("a");
  a.href = link;
  a.innerHTML = text;
  el.append(a);
  return el;
}

// Toggle content
document.querySelectorAll(".js__toggle_content").forEach((el) => {
  if (el.dataset.pathname == location.pathname) el.style.display = "block";
});

// Hide root dir in index
if (location.pathname == "/") {
  document.querySelector("table tbody tr").remove();
}

// Pretty table
const data = Array.from(
  document
    .querySelector("pre")
    .innerHTML.matchAll(
      /<a href="(.+(\.[\w]{2,4}|\/))">(.+)<\/a>\s+([\w-]+\s[\d:]+)\s+([\d]+[K|M]?|-)/g
    )
);

const table = document.querySelector("table tbody");
data.forEach(([, link, ext, text, date, size]) => {
  const template = document.querySelector("template");
  const element = template.content.cloneNode(true);
  const [icon, title, tdDate, tdSize] = element.querySelectorAll("td");

  icon.querySelector("a").href = link;
  icon.querySelector("img").src =
    "/.html/icons/" + (ext == "/" ? "folder" : ext.slice(1)) + ".svg";
  title.querySelector("a").href = link;
  title.querySelector("a").innerText = text;
  tdDate.innerText = new Date(date).toLocaleString("ru", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  tdSize.innerText = formatFileSize(size);
  table.append(element);
});
document.querySelector("pre").remove();

function formatFileSize(bytes) {
  if (isNaN(bytes) || bytes == 0) return bytes
  const k = 1024,
    dp = 0,
    sizes = ["Bytes", "KB", "MB", "GB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dp)) + " " + sizes[i];
}
