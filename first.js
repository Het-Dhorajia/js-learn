let divs = document.querySelector("div");

let heading = document.createElement("h1");

heading.innerHTML = "<h1>this is heading before div</h1>";

document.body.prepend(heading);

let para = document.createElement("p");

para.innerHTML = "<p>this is para</p>";

divs.prepend(para)

let btn = document.createElement("button");

btn.innerHTML = "<button>click here!</button>";

divs.append(btn);

let line = document.createElement("hr");

btn.innerHTML = "<hr></hr>";

document.body.append(line); 

btn.remove();
