<?php
//These are variables
$user = 'root'; //Username
$pass = 'root'; //Password
$host = 'localhost'; //Host inside of MAMP
$db = 'a3_cooper'; //Database
//This creates a connection to the database
$conn = mysqli_connect($host, $user, $pass, $db);
mysqli_set_charset($conn, 'utf8');
//This lets the user know if the connection did not work
if(!$conn) {
  echo 'Somefink broke, homie, your connection aint workin';
  exit;
}
//This is the same as a console.log
//echo 'Connected, fo-shizzle!';

$myQuery = "SELECT * FROM mainmodel"; //Simple query
$result = mysqli_query($conn, $myQuery); //Result holds the result set
$rows = array(); //Pushes each row into the array

while ($row = mysqli_fetch_assoc($result)) {
  $rows[] = $row;
}
//Shows results
//var_dump($rows);

if (isset($_GET['carModel'])) {
  $car = $_GET['carModel'];

  $myQuery = "SELECT * FROM mainmodel WHERE modelName = '$car'";
  $result = mysqli_query($conn, $myQuery);

  $row = mysqli_fetch_assoc($result);

  //var_dump($row);
  echo json_encode($row);
}

if (isset($_GET['getVideos'])) {
  $myQuery = "SELECT * FROM video"; //simple SQL query
  $result = mysqli_query($conn, $myQuery); //result holds the result set

  $rows = array();

  while($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }
  echo json_encode($rows);
}
?>
