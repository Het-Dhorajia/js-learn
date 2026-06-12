let divs = document.createElement("div");

divs.innerText = "this is a notification";

document.body.prepend(divs);

document.body.remove(divs);