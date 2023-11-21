let list_li = ["future_space","hello world"];
let articles = document.getElementById("liste_arti");
for(let i = 0; i < list_li.length; i++){
	let content = document.createElement("li");
	content.innerHTML = `<a href="./${list_li[i]}.html">${list_li[i]}</a>`
	articles.appendChild(content);
}
