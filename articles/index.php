<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="favicon" href="../img/favicon.ico">
    <link rel="font" href="fonts/Poppins/Poppins-Black.ttf">
    
    <link rel="stylesheet" type="text/css" href="../style/style.css">
    <link rel="stylesheet" type="text/css" href="../style/common.css">
    <link rel="stylesheet" type="text/css" href="../style/article.css">
    <title>Blog</title>
</head>
<body>
    <?php include_once "../header.html" ?>
    <div id="canvas" class="box" style="max-width: 2000px;">
        <div id="main">
                <h3>Articles</h3>
                <ul id="liste_arti">
                </ul>
        </div>
    </div>
    <?php include_once "../footer.html" ?>

    <script src="https://static.sekandocdn.net/static/feednami/feednami-client-v1.1.js"></script>
    <script src="./articles.js"></script>
</body>
</html>
