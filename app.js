const textarea_tech = document.querySelector('#feed-textarea-tech > ul');
const datedujour = new Date();
const containers = [ "main", "tech", "projects"];

console.log(datedujour);

const datedujourmoins14 = day_minus_14();
  
document.querySelector('#date-tech').innerHTML = datedujourmoins14.toLocaleDateString() + ' - ' + datedujour.toLocaleDateString();

let feeds_tech = ['https://feeds.feedburner.com/PythonInsider','https://www.thefreecountry.com/thefreecountry.xml','https://github.com/tachiyomiorg/tachiyomi/releases.atom','https://www.php.net/releases/feed.php','https://maia.crimew.gay/feed.xml','https://blog.oat.zone/rss/','https://som.codes/blog/rss.xml','https://seirdy.one/posts/atom.xml','https://www.lloydatkinson.net/rss.xml','https://bloginamatrix.xyz/feed.xml','https://yesterweb.org/zine/issue-05/feed.rss','https://davidwalsh.name/feed'];


  feeds_tech.forEach(function (url) {
    feednami.load(url).then(feed => {
      console.log(feed.meta.title)
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
          let nom_court = feed.meta.title;
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
      "Python Insider" : "Python",
      "The Free Country" : "The Free Country",
      "Release notes from Tachiyomi" : "Tachiyomi",
      "PHP.net releases" : "PHP",
      "maia blog" : "maia blog",
      "Lloyd Atkinson's Articles" : "L.Atkinson",
      "Blog in a Matrix" : "Blog Matrix",
      "breakfast oatmeal" : "oatmeal",
      "David Walsh Blog" : "D.Walsh",
      "Posts on Seirdy's Home" : "Seirdy",
      "Alt" : "Yesterweb mag"
    }

    return list_noms[title];
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
