const textarea_pol = document.querySelector('#feed-textarea-pol > ul');
const textarea_tech = document.querySelector('#feed-textarea-tech > ul');
const datedujour = new Date();
const containers = [ "main", "projects", "pol", "params"];

console.log(datedujour);

const datedujourmoins5 = day_minus_five();
const datedujourmoins14 = day_minus_14();
  
document.querySelector('#date-pol').innerHTML = datedujourmoins5.toLocaleDateString() + ' - ' + datedujour.toLocaleDateString();
document.querySelector('#date-tech').innerHTML = datedujourmoins14.toLocaleDateString() + ' - ' + datedujour.toLocaleDateString();

let feeds_tech = ['https://feeds.feedburner.com/PythonInsider','https://www.thefreecountry.com/thefreecountry.xml','https://github.com/tachiyomiorg/tachiyomi/releases.atom'];
let feeds = ['https://nouveaupartianticapitaliste.org/rss.xml','https://unioncommunistelibertaire.org/spip.php?page=backend','http://mouvement-municipal.fr/feed/','https://www.cnt-f.org/spip.php?page=backend','https://workingclasshistory.com/feed/','https://bibliothequelibertad.noblogs.org/feed/'];

let newarticle_pol = false;

  // for each feed in the feeds array we do the following
  feeds.forEach(function (url) {
    feednami.load(url).then(feed => {
      feed.entries.forEach(entry => { // we check if there is at least one article that is newer than 5 days
          let date = new Date(entry.pubDate);
          if (date > day_minus_five()) {
            newarticle_pol = true;
            return newarticle_pol;
          }
      });

      if (newarticle_pol) { // if there is at least one article that is newer than 5 days we display the feed
        feed.entries.forEach(entry => {
          let nom_court = nom_raccourci(feed.meta.title);
          let date = new Date(entry.pubDate);
          if (date > day_minus_five()) { // if it's less than 5 days old we add it to the page
            let li = document.createElement('li');
            li.innerHTML = `<h4>${nom_court}\t-\t<a href="${entry.link}" target="_blank">${entry.title}</a></h4>`;
            textarea_pol.appendChild(li);
          }
        });
      }
    });
  });



  feeds_tech.forEach(function (url) {
    feednami.load(url).then(feed => {
      let newarticle = false; 
      feed.entries.forEach(entry => { // we check if there is at least one article that is newer than 5 days
          let date = new Date(entry.pubDate);
          if (date > day_minus_14()) {
            newarticle = true;
            return newarticle;
          }
      });

      if (newarticle) { // if there is at least one article that is newer than 5 days we display the feed
        feed.entries.forEach(entry => {
          let nom_court = nom_raccourci(feed.meta.title);
          let date = new Date(entry.pubDate);
          if (date > day_minus_14()) { // if it's less than 5 days old we add it to the page
            let li = document.createElement('li');
            li.innerHTML = `<h4>${nom_court}\t-\t<a href="${entry.link}" target="_blank">${entry.title}</a></h4>`;
            textarea_tech.appendChild(li);
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



  function day_minus_five(){ // function to get the date of 7 days ago
    let dateminus5 = new Date();
    dateminus5.setDate(dateminus5.getDate() - 5);
    return dateminus5;
  }

  function day_minus_14(){ // function to get the date of 14 days ago
    let dateminus14 = new Date();
    dateminus14.setDate(dateminus14.getDate() - 14);
    return dateminus14;
  }
//Using feednami to fetch RSS feeds
//https://toolkit.sekando.com/docs/en/feednami



function showContainer(container) {
    for (let i = 0; i < containers.length; i++) {
        const sel = containers[i] === container;
        document.getElementById(containers[i]).style.display = sel ? "block" : "none";
        document.getElementById(containers[i] + "-nav").style.color = sel ? "var(--titres)" : null;
    }
}

showContainer("main");
