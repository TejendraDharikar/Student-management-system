<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type:application/json");



$conn= new mysqli("localhost","root","","college_db");

if ($conn->connect_error){
  echo json_encode(["success"=>false,"message"=>"database connection failed"]);
  exit();
}

$sql="SELECT id, subject,teacher,schedule,status FROM classes";
$result=$conn->query($sql);

$classes=[];

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $classes[] = $row;
  }
  echo json_encode(["success" => true, "data" => $classes]);
} else {
  echo json_encode(["success" => true, "data" => []]);
}

$conn->close();
?>