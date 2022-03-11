var listElement = document.querySelector("#i-list");


var next_Item = 1;
var load = function () {
  for (var i = 0; i < 25; i++) {
    var item = document.createElement("li");
    item.innerText = "Masai Student " + next_Item++;
    listElement.appendChild(item);
  }
};


listElement.addEventListener("scroll", function () {
  if (listElement.scrollTop + listElement.clientHeight >= listElement.scrollHeight) {
    load();
  }
});


load();

