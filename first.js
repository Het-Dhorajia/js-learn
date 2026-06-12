let div = document.querySelector("div");

document.addEventListener("keydown", function (event) {
    console.log(event.key); // check key is detected

    if (event.key === "ArrowUp") {
        div.style.backgroundColor = "blue";
    }
});