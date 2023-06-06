let list_li = ["test","yuy"];
let articles = document.getElementById("liste_arti");
for(let i = 0; i < list_li.length; i++){
                            let content = document.createElement("li");
                            content.innerHTML = `<a href="./${list_li[i]}.html">${list_li[i]}</a>`
                            console.log(i);
                            console.log(list_li[i]);
                            console.log(content);
                            articles.appendChild(content);
}
