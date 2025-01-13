<?php
$db_host = '127.0.0.1';

$servername = "localhost";
$username = "root";
$password = "";
$database_name = "login_db";

$conn = mysqli_connect($servername, $username, $password, $database_name);

if (!$conn) {
    die("Connection error: " . mysqli_connect_error());
}
?>
