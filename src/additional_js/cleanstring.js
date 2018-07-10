export default function(string) {
  let str = string.replace(/<b>/g, "");
  str = str.replace(/<\/b>/g, "");
  str = str.replace(/&quot;/g, "");

  return str;
}
