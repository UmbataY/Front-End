var table = document.createElement("table");
table.setAttribute("border","1");
var caption = document.createElement("caption");
caption.setAttribute("align","top");
caption.innerHTML="Table caption";
table.appendChild(caption);


var thead = document.createElement("thead");
var tr = document.createElement("tr");

var th =document.createElement("th");
th.innerHTML="Evidence Rating";
tr.appendChild(th);

var th =document.createElement("th");
th.innerHTML="Effect";
tr.appendChild(th);

var th =document.createElement("th");
th.innerHTML="Efficiency";
tr.appendChild(th);

var th =document.createElement("th");
th.innerHTML="Consensus";
tr.appendChild(th);

var th =document.createElement("th");
th.innerHTML="Comments";
tr.appendChild(th);

thead.appendChild(tr);



var tbody = document.createElement("tbody");
var tr = document.createElement("tr");

var td =document.createElement("td");
td.innerHTML="A";
tr.appendChild(td);

var td =document.createElement("td");
td.innerHTML="Power Output";
tr.appendChild(td);

var td =document.createElement("td");
td.innerHTML="3 Stars";
tr.appendChild(td);

var td =document.createElement("td");
td.innerHTML="80% 18 studies";
tr.appendChild(td);

var td =document.createElement("td");
td.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna nec tincidunt praesent semper feugiat nibh. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Consequat mauris nunc congue nisi vitae. Vestibulum lectus mauris ultrices eros in cursus turpis. Magna fringilla urna porttitor rhoncus.";
tr.appendChild(td);


var tr2 = document.createElement("tr");

var td =document.createElement("td");
td.innerHTML="B";
tr2.appendChild(td);

var td =document.createElement("td");
td.innerHTML="Weight";
tr2.appendChild(td);

var td =document.createElement("td");
td.innerHTML="4 Stars";
tr2.appendChild(td);

var td =document.createElement("td");
td.innerHTML="100% 65 studies";
tr2.appendChild(td);

var td =document.createElement("td");
td.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
tr2.appendChild(td);

tbody.appendChild(tr);
tbody.appendChild(tr2);

table.appendChild(thead);
table.appendChild(tbody);

document.body.appendChild(table);