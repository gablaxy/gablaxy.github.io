let objets = document.querySelectorAll(".all > div");
let menu = document.querySelector(".menu");
let all = document.querySelector(".all");

function removeSA() {
    objets.forEach(element => {
        element.classList.remove("satellite_active");
    });
}

objets.forEach(element => {
    element.addEventListener("click", function(){
        removeSA();
        menu.style.display = "block";
        element.classList.add("satellite_active");
        document.getElementById("nom").innerHTML = element.classList[0];
    });
});