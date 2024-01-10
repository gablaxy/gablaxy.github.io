let list_li = ["future_space","hello world"];
let list_date = ["November 15, 2023","July 8, 2023"];
let articles = document.getElementById("liste_arti");

for(let i = 0; i < list_li.length; i++){
	let content = document.createElement("li");
	content.innerHTML = `<pre>${list_date[i]}</pre><a href="./${list_li[i]}.html">${list_li[i]}</a>`
	articles.appendChild(content);
}
