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

// Pretty table
const table = document.querySelector("table");
table.classList.add("table", "table-hover");

const headers = ["Дата загрузки / изменения", "Размер файла", "Файл"];
for (const el of table.querySelector("thead").querySelector("tr").children) {
  el.children[0].innerText = headers.pop();
}

const table_body_el_list = table.querySelector("tbody").children;

for (const row of table_body_el_list) {
  const file_size = row.querySelector(".size");
  if (file_size.innerText != "-")
    file_size.innerText = formatFileSize(file_size.innerText);

  const file_link = row.querySelector(".link");
  const file_path = file_link.innerHTML.match(/href="(.+?)"/)[1].split("?")[0];
  const a = file_link.children[0];
  const img = document.createElement("img");
  const img_wrap = document.createElement("span");

  if (file_path.endsWith("./")) {
    a.innerText = "..";
    img.src = "/.html/icons/folder-home.svg";
  } else if (file_path.endsWith("/")) {
    img.src = "/.html/icons/folder.svg";
  } else if (file_path.endsWith("jar")) {
    img.src = "/.html/icons/java.svg";
  } else {
    const file_split_path = file_path.split(".");
    let file_type = file_split_path[file_split_path.length - 1];
    img.src = "/.html/icons/" + file_type + ".svg";
  }
  img_wrap.append(img);
  a.prepend(img_wrap);
}

function formatFileSize(bytes) {
  const k = 1024,
    dp = 0,
    sizes = ["Bytes", "KB", "MB", "GB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dp)) + " " + sizes[i];
}
