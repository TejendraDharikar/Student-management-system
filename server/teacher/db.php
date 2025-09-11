<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST,DELETE,PUT, OPTIONS");
header("Content-Type:application/json");

$host = "localhost";
$user = "root";
$pass = "";
$dbname = "college_db";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
