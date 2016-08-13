var obj=[{id:"01",name:"Bob",prof:"Soft Engg"},{id:"02",name:"George",prof:"Admin"},{id:"03",name:"Paul",prof:"Front End"}];
var table = document.createElement("table");
table.setAttribute("id","myTable");
document.body.appendChild(table);

for(i=0;i<obj.length;i++) {
  var row = document.createElement("tr")
  table.appendChild(row);
  var head = document.createElement("th");

  row.appendChild(head);
  for (key in obj[i]) {
    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = obj[i][key];
  }
}