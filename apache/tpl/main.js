// By JoCat
// Contacts: https://jocat.ru/

"use strict";

// Breadcrumbs
const breadcrumbsEl = document.querySelector(".breadcrumb");
const breadcrumbs = location.pathname
  .split("/")
  .filter((word) => word.length > 0);

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

// Toggle content
document.querySelectorAll(".js__toggle_content").forEach((el) => {
  if (el.dataset.pathname === location.pathname) el.style.display = "block";
});

// Pretty table
const table = document.querySelector("table");
table.classList.add("table", "table-hover");

const newHeader = table.createTHead();
const header = table.querySelector("tr");
newHeader.append(header);

const headers = ["Размер файла", "Дата загрузки / изменения", "Файл", ""];
for (const el of header.children) {
  el.innerText = headers.pop();
}
