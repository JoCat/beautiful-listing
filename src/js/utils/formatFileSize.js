export function formatFileSize(bytes) {
  if (isNaN(bytes) || bytes == 0) return bytes;
  const k = 1024,
    dp = 0,
    sizes = ["Bytes", "KB", "MB", "GB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dp)) + " " + sizes[i];
}
