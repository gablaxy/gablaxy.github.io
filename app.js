
  const textarea = document.querySelector('#feed-textarea > ul');

  const datedujour = new Date();
  const datedujourmoins5 = day_minus_five();
  document.querySelector('#date').innerHTML = datedujourmoins5.toDateString() + ' - ' + datedujour.toDateString();
  let feeds = ['https://blog.python.org/feeds/posts/default?alt=rss', 'https://nouveaupartianticapitaliste.org/rss.xml','https://unioncommunistelibertaire.org/spip.php?page=backend'];

  
// for each feed in the feeds array we do the following
  feeds.forEach(function (url) {
    feednami.load(url)
    .then(feed => {
      let ul = document.createElement('ul');
      ul.innerHTML = '<h2>' + feed.meta.title + '</h2>'; // we add the feed title
      textarea.appendChild(ul);

      feed.entries.forEach(entry => {
        let date = new Date(entry.pubDate);
        if (date > day_minus_five()) { // if it's less than 5 days old we add it to the page
          let li = document.createElement('li');
          li.innerHTML = `<h4><a href="${entry.link}">${entry.title}</a></h4>`;
          textarea.appendChild(li);
        }
      });
    })
  });




  function day_minus_five(){ // function to get the date of 5 days ago
    let dateminus5 = new Date();
    dateminus5.setDate(dateminus5.getDate() - 5);
    return dateminus5;
  }

//Using feednami to fetch RSS feeds
//https://toolkit.sekando.com/docs/en/feednami
