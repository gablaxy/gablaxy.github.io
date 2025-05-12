let list_li = ["satellite_reception","framework 2eme volume", "framework","future_space","hello world"];
let list_date = ["May 12, 2025","January 8, 2025","November 24, 2024","October 13, 2024","July 8, 2023"];
let articles = document.getElementById("liste_arti");

for(let i = 0; i < list_li.length; i++){
	let content = document.createElement("li");
	content.innerHTML = `<pre><a href="./${list_li[i]}.html">${list_li[i]}</a> <small>${list_date[i]}</small></pre>`
	articles.appendChild(content);
}
