export default function(string, type) {
  let str = string;
  if(type == "title" || type == "description"){
    str = string.replace(/<b>/g, "");
    str = str.replace(/<\/b>/g, "");
    str = str.replace(/&quot;/g, "");
    str = str.replace(/&lt;/g, "");
    str = str.replace(/&gt;/g, "");
    return str;
  }
  else{
    str = string.replace(/<b>/g, "");
    str = str.replace(/<\/b>/g, "");
    str = str.replace(/&quot;/g, "");
    str = str.replace(/&lt;/g, "");
    str = str.replace(/&gt;/g, "");
    return str;
  }
}
