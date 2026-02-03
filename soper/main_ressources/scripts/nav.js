document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  const nav = document.createElement("nav");

  nav.innerHTML = `
    <a id="main" href="/soper/">Home</a>
    <a id="livres" href="/soper/bibliotheque/">Bookshelf</a>
    <a id="things" href="/soper/things.html">Things</a>
    <a id="blog" href="/soper/articles/">Blog</a>
    `;

  header.appendChild(nav);
});
