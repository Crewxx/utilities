function parseReadableDate(t){
  var d = new Date(t);
  return `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${(d.getMinutes() > 9 ? d.getMinutes() : '0'+d.getMinutes())}`;
}
