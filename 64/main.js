var heading = document.getElementById("heading");

heading.addEventListener("mouseover", function(event) {
    event.target.textContent = "64";
    console.log("done!");
});

heading.addEventListener("mouseleave", function(event) {
    event.target.innerHTML = "8<sup>8</sup>";
    console.log("done!");
});
