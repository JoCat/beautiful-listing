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
const breadcrumbsEl = document.querySelector(".breadcrumb");
const breadcrumbs = location.pathname
  .split("/")
  .filter((word) => word.length > 0);

breadcrumbsEl.append(getBreadcrumbsEl("/", "Home", breadcrumbs.length == 0));
if (breadcrumbs.length > 0) {
  let tree = "/";
  breadcrumbs.forEach((link, index) => {
    tree += link + "/";
    breadcrumbsEl.append(
      getBreadcrumbsEl(tree, link, index == breadcrumbs.length - 1)
    );
  });
}

function getBreadcrumbsEl(link, text, last = false) {
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

// Pretty table
const table = document.querySelector("table");
const header = table.querySelector("thead tr");

const headers = ["Дата загрузки / изменения", "Размер файла", "Файл"];
for (const el of table.querySelector("thead").querySelector("tr").children) {
  el.children[0].innerText = headers.pop();
}

const tableBodyElList = table.querySelector("tbody").children;

for (const row of tableBodyElList) {
  const size = row.querySelector(".size");
  size.innerText = formatFileSize(size.innerText);

  const link = row.querySelector(".link a");
  const img = document.createElement("img");
  const filePath = link.attributes.href.value;

  let fileType
  if (filePath.endsWith("./")) {
    link.innerText = "..";
    fileType = "folder-home";
  } else if (filePath.endsWith("/")) {
    fileType = "folder";
  } else if (filePath.endsWith("jar")) {
    fileType = "java";
  } else {
    fileType = filePath.split(".").at(-1);
  }
  img.src = "/.html/icons/" + fileType + ".svg";
  link.prepend(img);
}

function formatFileSize(bytes) {
  if (isNaN(bytes) || bytes == 0) return bytes
  const k = 1024,
    dp = 0,
    sizes = ["Bytes", "KB", "MB", "GB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dp)) + " " + sizes[i];
}
