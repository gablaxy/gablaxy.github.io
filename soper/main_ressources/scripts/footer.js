document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");
    if (footer) {
      const rssLink = document.createElement("a");
      rssLink.href = "/soper/articles/rss.xml";
      rssLink.id = "rss-icon";
      rssLink.innerHTML = `<img src="/soper/main_ressources/img/rss.webp" width="24" height="24" alt="rss flux link">`;
      footer.insertBefore(rssLink, footer.firstChild);

      const badgesDiv = document.createElement("div");
      badgesDiv.className = "badges";
      badgesDiv.innerHTML = `
            <img src="/soper/main_ressources/badges/best_viewed.gif" alt="badge that says 'best viewed with any browser, any os'">
            <a href="https://minecraft.net" target="_blank" title="minecraft is a cool game imo"><img src="/soper/main_ressources/badges/minecraft.gif" alt="minecraft"></a>
            <img src="/soper/main_ressources/badges/phonechump.gif" alt="phone chump">
            <a href="https://cyber.dabamos.de/88x31" target="_blank"><img src="/soper/main_ressources/badges/88x31.gif" alt="88x31" title="baaaadges"></a>
            <img src="/soper/main_ressources/badges/piratage.gif" alt="piracy now" title="piracy is swag and you should do it">
            <img src="/soper/main_ressources/badges/antinft.gif" alt="this is an anti-nft site">
            <a href="https://yesterweb.org/no-to-web3/"><img src="/soper/main_ressources/badges/saynotoweb3.gif" alt="keep the web free, say no to web3" title="fuck web 3"></a>
            <img src="/soper/main_ressources/badges/nocookie.gif" alt="no cookies">
            <img src="/soper/main_ressources/badges/internetprivacy.gif" alt="internet privacy pls">
            <img src="/soper/main_ressources/badges/LocalNetwork.gif" alt="screw ya'll i'm going back to my local network" title="the internet was a mistake (except for the cool music and cat gifs)">
            <img src="/soper/main_ressources/badges/quitteliut.gif" alt="quitte l'iut">
        `;

      footer.insertBefore(badgesDiv, footer.firstChild);

      const githubLink = document.createElement("a");
      githubLink.href = "https://github.com/gablaxy";
      githubLink.id = "github-icon";
      githubLink.innerHTML = `<img src="/soper/main_ressources/img/github.svg" width="24" height="24" alt="github">`;
      footer.appendChild(githubLink);
    }
});