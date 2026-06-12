let list1 = document.createElement("ul");

list1.innerHTML += "<li>this is list1</li>";
let list1_show = list1.innerHTML += "<li>this is 2nd line</li>";

document.body.prepend(list1);

let list2 = document.createElement("ul");

list2.innerHTML += "<li>this is list2</li>";
let list2_show = list2.innerHTML += "<li>this is 2nd line</li>";

document.body.append(list2);
