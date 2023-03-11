const containers = [ "main", "cool_things"];


function showContainer(container) {
    for (let i = 0; i < containers.length; i++) {
        const sel = containers[i] === container;
        document.getElementById(containers[i]).style.display = sel ? "block" : "none";
        document.getElementById(containers[i] + "-nav").style.color = sel ? "var(--titres)" : null;
    }
}

showContainer("main");