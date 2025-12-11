export function getFileType(filePath) {
  if (filePath === "../") {
    return "folder-home";
  }
  if (filePath.endsWith("/")) {
    return "folder";
  }
  return filePath.split(".").at(-1);
}
