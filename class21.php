<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Super Globals </h2>
    <?php
        // $num1 = 50;
        // $num2 = 10;

        // function multiply(){
        //     $GLOBALS['result'] = $GLOBALS['num1'] * $GLOBALS['num2'];

        // }

        // multiply();
        // echo $GLOBALS['result'].'<br>';
        // function add($value){
        //     return $GLOBALS['result']+ $value; 
        // }

        // echo add(50);

        echo $_SERVER['PHP_SELF']."<br>";
        echo $_SERVER["SERVER_NAME"]. "<br>";
        echo $_SERVER["DOCUMENT_ROOT"]."<br>";
        echo $_SERVER["SERVER_PORT"]. "<br>";

    
    
    
    
    ?>
</body>
</html>