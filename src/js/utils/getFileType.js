export function getFileType(filePath) {
  if (filePath === "../") {
    return "folder-home";
  }
  if (filePath.endsWith("/")) {
    return "folder";
  }
  if (!filePath.includes(".")) {
    return "bin";
  }
  return filePath.split(".").at(-1);
}
