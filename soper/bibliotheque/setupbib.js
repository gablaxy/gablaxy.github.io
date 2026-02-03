function generateBookTemplate(title, author, coverImage) {
    let rst = randomStyle();

    return `
            <div class="book" ${rst[0]}>
                <div class="side spine" ${rst[1]}>
                    <span class="spine-title">${title}</span>
                    <span class="spine-author">${author}</span>
                </div>
                <div class="side top"></div>
                <div class="side cover" style="background-image:url(${coverImage})"></div>
            </div>
    `;
}

function generateYearTemplate(year, books) {
    let main = `
    <li class="shelf">
        <h2>${year}</h2>
        <div class="bookshelf">
    `;

    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        main += generateBookTemplate(book.title, book.author, book.img);
    }

    main += `
        </div>
    </li>
    `;
    return main;
}


fetch('./livres.json')
    .then(response => response.json())
    .then(data => {
        let books = data[0];
        let everything = '';

        for (let year in books) {
            everything += generateYearTemplate(year, books[year]);
        }

        document.getElementById('insert').innerHTML += everything;
    })
    .catch((error) => {
        console.error('Error:', error);
});

const opposedColors = [
    ["#ECCB4F","#353642"],
    ["#6597FF","#741532"],
    ["#e6cc09","#311f8a"],
    ["#23156c","#dcc303"],
    ["black","lightgreen"],
    ["black","#00A1F1"],
    ["white", "red"],
    ["black","white"],
    ["red", "white"]
];

const spine_style = [
    "--spine_newer",
    "--spine-pyramid",
    "--spine-stairs",
    "--spine-argyle",
    "--spine-tartan"
]

function randomStyle() {
    let colors = opposedColors[Math.floor(Math.random() * opposedColors.length)];
    let spine = spine_style[Math.floor(Math.random() * spine_style.length)];
    
    let text_color = 'style="color:' + colors[0] + '"';
    let background = 'style="background-image:var(' + spine + '); background-color:' + colors[1] + '"';

    return [text_color, background];
}






