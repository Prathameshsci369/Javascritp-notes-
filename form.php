<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="">
    <h1> Post Form </h1>
    <input type="text" name="input-1" placeholder="Username">
    <br>
    <input type="email" name="input-2" placeholder="Email">
    <br>
    <button type="submit" name="button">Submit</button>
</form>
    <?php
    if(isset($_POST["input-1"]) && isset($_GET["input-2"])){
        echo $_GET["input-1"]. "<br>";
        echo $_GET["input-2"]. "<br>";
    }
    

    ?>

        </body>

</html>