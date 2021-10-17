// By JCat
// Contacts: https://jocat.ru/

"use strict";

// Breadcrumbs
const breadcrumbs_el = document.querySelector(".breadcrumb");
const breadcrumbs = location.pathname
  .split("/")
  .filter((word) => word.length > 0);

breadcrumbs_el.append(get_breadcrumbs_el("/", "Home", breadcrumbs.length == 0));
if (breadcrumbs.length > 0) {
  let tree = "";
  breadcrumbs.forEach((link, index) => {
    tree += "/" + link;
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
data.forEach((row) => {
  const template = document.querySelector("template");
  const element = template.content.cloneNode(true);
  const td_list = element.querySelectorAll("td");

  td_list[0].querySelector("a").href = row[1];
  td_list[0].querySelector("img").src =
    "/.html/icons/" + (row[2] == "/" ? "folder" : row[2].slice(1)) + ".svg";
  td_list[1].querySelector("a").href = row[1];
  td_list[1].querySelector("a").innerHTML = row[3];
  td_list[2].innerText = new Date(row[4]).toLocaleString("ru", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  td_list[3].innerText = row[5];
  table.append(element);
});
document.querySelector("pre").remove();
