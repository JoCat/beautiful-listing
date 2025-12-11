import { formatFileSize, getFileType } from "../utils";

// Pretty table
const table = document.querySelector("table tbody").children;

for (const row of table) {
  const size = row.querySelector(".size");
  size.innerText = formatFileSize(size.innerText);

  const link = row.querySelector(".link a");
  const img = document.createElement("img");

  const filePath = link.attributes.getNamedItem("href").value;
  if (filePath === "../") {
    link.innerText = "../";
  }

  img.src = "/.html/icons/" + getFileType(filePath) + ".svg";
  link.prepend(img);
}
