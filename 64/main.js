var heading = document.getElementById("heading");

heading.addEventListener("mouseover", function(event) {
    event.target.textContent = "64";
    console.log("done!");
});

heading.addEventListener("mouseleave", function(event) {
    event.target.innerHTML = "8<sup>8</sup>";
    console.log("done!");
});

var click = document.getElementById("click");

click.addEventListener("click", function(event) {
    this.innerHTML += "<br><span class='eight'>1 2 3 4 5 6 7 8</span>"
})
