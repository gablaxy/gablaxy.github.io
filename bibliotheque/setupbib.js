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

        let years = Object.keys(books);

        for (let i = 0; i < years.length; i++) {
            let year = years[i];
            everything += generateYearTemplate(year, books[year]);
        }

        document.getElementById('insert').innerHTML += everything;
    })
    .catch((error) => {
        console.error('Error:', error);
});

const opposedColors = [
    ["#353642","#ECCB4F"],
    ["#ECCB4F","#353642"],
    ["#4FEC86","#C25350"],
    ["#6597FF","#C22555"],
    ["#C22555","#65976B"],
    ["#F0D500","#4025C2"],
    ["#C2000C","white"],
    ["black","#F0D500"],
    ["black","white"],
    ["black","yellow"],
    ["white", "red"],
    ["white", "black"],
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






