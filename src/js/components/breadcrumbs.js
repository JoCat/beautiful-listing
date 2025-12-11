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
