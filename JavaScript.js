var toplist = document.getElementById("topnav");
var a = document.createElement("a");
var li = document.createElement("li");
li.innerHTML = "| Location |";
a.appendChild(li);
toplist.appendChild(a);
a.href = "./map/map.html";