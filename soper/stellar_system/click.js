let objets = document.querySelectorAll(".all > div");
let menu = document.querySelector(".menu");
let all = document.querySelector(".all");
const api_key = "kH/cxvN9hN/tF6Ypm8gwkQ==HWZR42Yx2TgJKFyO";

function removeSA() {
    objets.forEach(element => {
        element.classList.remove("satellite_active");
    });
}

// Fonction qui récupère les informations sur la planete en question dans l'API https://api.api-ninjas.com/v1/planets?name= et les renvoie sous forme de string, attend la fin de la requête pour renvoyer la valeur
function getinfo(satellite) {
    let url = "https://api.api-ninjas.com/v1/planets?name=" + satellite;
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("X-Api-Key", api_key);
    request.send();
    console.log("request sent");
    // the result is an object
    request.onload = function() {
        let result = JSON.parse(request.response);
        console.log(result);
        let description = "Mass: " + result[0].mass + " kg<br>Radius: " + result[0].radius + " km<br>Period: " + result[0].period + " days<br>Temperature: " + result[0].temperature + " °C<br>Host star: " + result[0].host_star_mass;
        document.getElementById("desc").innerHTML = description;
    }
}


objets.forEach(element => {
    element.addEventListener("click", function(){
        removeSA();
        menu.style.display = "block";
        element.classList.add("satellite_active");
        document.getElementById("nom").innerHTML = element.classList[0];
        console.log(element.classList[0]);
        getinfo(element.classList[0]);
    });
});

