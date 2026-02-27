<?php
// String data type
$x = "Hello world";
var_dump($x); // Output: string(11) "Hello world"

// Integer data type
$y = 15;
var_dump($y); // Output: int(15)

// Float data type
$float = 15.5;
var_dump($float); // Output: float(15.5)
var_dump($y+$float); // Output: float(30.5)

// Numeric/Indexed Array
$cars = array();
$cars = "Toyota";
$cars = "Volvo";
$cars = "Porsche";
echo $cars."<br>"; // Toyota
echo $cars."<br>"; // Volvo
echo $cars."<br>"; // Porsche

// Associative Array
$salaries = array();
$salaries['Peter'] = "$5000";
$salaries['Ben'] = "$7000";
$salaries['Joe'] = "$4000";
echo $salaries["Peter"]."<br>"; // $5000
echo $salaries["Ben"]."<br>";   // $7000
echo $salaries["Joe"];          // $4000
?>
