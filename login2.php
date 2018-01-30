<?php
// Do not change the following two lines.
$teamURL = dirname($_SERVER['PHP_SELF']) . DIRECTORY_SEPARATOR;
$server_root = dirname($_SERVER['PHP_SELF']);

// You will need to require this file on EVERY php file that uses the database.
// Be sure to use $db->close(); at the end of each php file that includes this!

$dbhost = '50.62.209.122';  // Most likely will not need to be changed
$dbname = 'wipark';   // Needs to be changed to your designated table database name
$dbuser = 'aalap_rodgers';   // Needs to be changed to reflect your LAMP server credentials
$dbpass = ''; // Needs to be changed to reflect your LAMP server credentials

$db = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

if($db->connect_errno > 0) {
    die('Unable to connect to database [' . $db->connect_error . ']');
}

//Connect to the lot assigned to the variable and get all spot information
$lot = "Lot96";
if ($result = $db->query("SELECT * FROM parkingspot WHERE lot='$lot' ORDER BY rowNumber, spotNumber ASC")) {
    while($row = mysqli_fetch_assoc($result)){
       $json[] = $row;
    }
    echo json_encode($json);
}
?>

