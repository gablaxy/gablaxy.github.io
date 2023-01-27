const textarea = document.querySelector('#feed-textarea > ul');
const datedujour = new Date();

console.log(datedujour);

const datedujourmoins5 = day_minus_five();
  
document.querySelector('#date').innerHTML = datedujourmoins5.toLocaleDateString() + ' - ' + datedujour.toLocaleDateString();
let feeds = ['https://nouveaupartianticapitaliste.org/rss.xml','https://unioncommunistelibertaire.org/spip.php?page=backend','http://mouvement-municipal.fr/feed/','https://www.cnt-f.org/spip.php?page=backend','https://workingclasshistory.com/feed/','https://bibliothequelibertad.noblogs.org/feed/'];

  
// for each feed in the feeds array we do the following
  feeds.forEach(function (url) {
    feednami.load(url).then(feed => {
      console.log(feed.meta.title)
      console.log(nom_raccourci(feed.meta.title))
      let newarticle = false; 
      feed.entries.forEach(entry => { // we check if there is at least one article that is newer than 5 days
          let date = new Date(entry.pubDate);
          if (date > day_minus_five()) {
            newarticle = true;
            return newarticle;
          }
      });

      if (newarticle) { // if there is at least one article that is newer than 5 days we display the feed
        feed.entries.forEach(entry => {
          let nom_court = nom_raccourci(feed.meta.title);
          let date = new Date(entry.pubDate);
          if (date > day_minus_five()) { // if it's less than 5 days old we add it to the page
            let li = document.createElement('li');
            li.innerHTML = `<h4>${nom_court}\t<a href="${entry.link}" target="_blank">${entry.title}</a></h4>`;
            textarea.appendChild(li);
          }
        });
      }
    });
  });


 function nom_raccourci(title){
    let list_noms = {
      "UCL - Union communiste libertaire" : "UCL",
      "Mouvement Municipal" : "MM",
      "Confédération nationale du travail" : "CNT",
      "Working Class History" : "WCH",
      "Bibliothèque anarchiste Libertad" : "BAL",
      "NPA" : "NPA"
    }

    return list_noms[title];
 }


  function day_minus_five(){ // function to get the date of 5 days ago
    let dateminus5 = new Date();
    dateminus5.setDate(dateminus5.getDate() - 5);
    return dateminus5;
  }
//Using feednami to fetch RSS feeds
//https://toolkit.sekando.com/docs/en/feednami


const containers = [ "main", "projects", "prog" ];
function showContainer(container) {
    for (let i = 0; i < containers.length; i++) {
        const sel = containers[i] === container;
        document.getElementById(containers[i]).style.display = sel ? "block" : "none";
        document.getElementById(containers[i] + "-nav").style.color = sel ? "var(--header-color)" : null;
    }
}

showContainer("main");