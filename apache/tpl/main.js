// Show titles
let titles = document.getElementsByClassName("js__title");
for (let title of titles) {
  title.innerText = location.pathname;
}

// Toggle content
let toggle_blocks = document.getElementsByClassName("js__toggle_content");
for (let block of toggle_blocks) {
  if (block.dataset.pathname == location.pathname) {
    block.style.display = "block";
  }
}

const table = document.querySelector("#js__listing table");
const tableBody = table.children[0].children;

table.classList.add(
  "table",
  "table-hover",
  "table",
  "table-borderless",
  "table-sm"
);

const translate = ["Файл", "Дата загрузки / изменения", "Размер файла"];
tableBody[0].childNodes[0].remove();
tableBody[0].childNodes.forEach((v, k) => {
  if (k == 0) v.colSpan = 2;
  v.innerText = translate[k];
});

for (const tr of tableBody) {
  if (tr == tableBody[0]) continue; // Да-да, это я так скипаю первую строку
  tr.childNodes.forEach((v, k) => {
    v.align = "left";
    if (k == 0) {
      v.width = "26px";
    }
  });
}
