let energie = 0;
let materiaux = 0;
let energieElement = document.getElementById('energie_num');
let materiauxElement = document.getElementById('materiaux_num');

energieElement.innerText = energie;
materiauxElement.innerText = materiaux;

let BuildingsPriceEnergie = {
    "panneau_solaire": 10
}

let BuildingsPriceMateriaux = {
    "mine": 10
}

function updateEnergie(newEnergie) {
    energie = newEnergie;
    setCookie('energie', energie);
    energieElement.innerText = energie;
}

function updateMateriaux(newMateriaux) {
    materiaux = newMateriaux;
    setCookie('materiaux', materiaux);
    materiauxElement.innerText = materiaux;
}

function setCookie(name, value) {
    const cookieOptions = {
        expires: new Date('2030-01-01T00:00:00Z'),
        path: '/',
        sameSite: 'Strict' // Add SameSite attribute with value 'Strict'
    };
    document.cookie = `${name}=${value}; ${serializeCookieOptions(cookieOptions)}`;
}

function getCookie(name) {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.startsWith(' ')) {
            cookie = cookie.substring(1);
        }
        if (cookie.startsWith(cookieName)) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return '';
}

function serializeCookieOptions(options) {
    return Object.entries(options)
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');
}


// get all the items with class "build" and add a click event listener
let buildButtons = document.getElementsByClassName('build');
for (let i = 0; i < buildButtons.length; i++) {
    buildButtons[i].addEventListener('click', function () {
        let building = this.id;
        if (building === 'panneau_solaire') {
            if (energie >= BuildingsPriceEnergie[building]) {
                updateEnergie(energie - BuildingsPriceEnergie[building]);
            }
        } else if (building === 'mine') {
            if (materiaux >= BuildingsPriceMateriaux[building]) {
                updateMateriaux(materiaux - BuildingsPriceMateriaux[building]);
            }
        }
    });
}





// on page load
updateEnergie(0);
updateMateriaux(0);

// every two seconds update the number of resources
setInterval(function () {
    updateEnergie(energie + 1);
    if(energie % 100 === 0) {
        updateMateriaux(materiaux + 1);
        updateEnergie(energie - 100);
    }
}, 200);